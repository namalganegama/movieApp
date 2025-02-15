import {useState} from "react";
import { Text, View } from 'react-native';

export function Movies() {

  const [data,setData] = useState('');

  async function getMovies(){
      try {
        const response = await fetch('https://api.themoviedb.org/3/discover/movie');
        setData = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    getMovies();

  

  return (
    <View style={styles.container}>
      <Text>Movies</Text>

      <View style={styles.box}>

        <Text>{data.results.original_title}</Text>
      </View>

      <StatusBar style="auto" />
    </View>
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
