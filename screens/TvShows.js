import {useState} from "react";
import { Text, View } from 'react-native';

export function TvShows() {

  const [data,setData] = useState('');

  async function getTvShows(){
      try {
        const response = await fetch('https://api.themoviedb.org/3/discover/movie');
        setData = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    getTvShows();

  

  return (
    <View style={styles.container}>
      <Text>Tv Shows</Text>

      <TouchableOpacity>

      <View style={styles.box}>

        <Text>{data.results.original_name}</Text>
      </View>

      <StatusBar style="auto" />
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  box: {
    margin: 5,
    borderRadius: 2,
    backgroundColor: '#FFF'
  }
});
