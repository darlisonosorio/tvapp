import React from 'react';
import { useDispatch } from 'react-redux';
import { AppBar, AppLoading, AppScreen, Typography } from '../../../../components';
import { Person } from '../../@types';
import PeopleList from '../../components/PeopleList';
import { usePeople } from '../../hooks/usePeople';
import { setPerson } from '../../store/actions';

const ActorsScreen = ({ navigation }) => {
  const dispatcher = useDispatch();
    const {
      loading,
      refreshing,
      people,
      refresh,
      getMorePeople,
      setQuery,
    } = usePeople();
  
    const onSeriePress = (item: Person) => {
      dispatcher(setPerson(item));
      navigation.navigate('ActorDetails');
    };
  
    return (
      <AppScreen
        navigation={navigation}
        customAppBar={(
          <AppBar
            title="Actors"
            navigation={navigation}
            searchPlaceholder="type the actor name"
            enableBackAction={false}
            onSearchValueChange={(val) => {
              setQuery(val.trim());
            }}
          />
        )}
      >
  
        <PeopleList
          data={people}
          refreshing={refreshing}
          onItemPress={onSeriePress}
          getMore={getMorePeople}
          refresh={refresh}
        />
  
       <AppLoading visible={loading && !refreshing} /> 
      </AppScreen>
    );
  };

export default ActorsScreen;