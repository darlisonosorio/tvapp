import React from 'react';
import { AppBar, AppLoading, AppScreen } from '../../../../components';
import { Person } from '../../@types';
import PeopleList from '../../components/PeopleList';
import { usePeople } from '../../hooks/usePeople';

const ActorsScreen = ({ navigation }) => {
    const {
      loading,
      refreshing,
      people,
      refresh,
      getMorePeople,
      setQuery,
    } = usePeople();
  
    const onSeriePress = (item: Person) => {
      navigation.navigate('ActorDetails', { model: item });
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
          loading={loading}
        />
  
       <AppLoading visible={loading && !refreshing} /> 
      </AppScreen>
    );
  };

export default ActorsScreen;