import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Text, View } from 'react-native';
import {config} from '../config';

export function Details() {

  const [data, setData] = useState('');

  async function getDetails() {
    try {
      const response = await 
      fetch('https://api.themoviedb.org/3/discover/movie', { 
        method: 'get', 
        headers: new Headers({
            'Authorization': config.apiKey), 
            'Content-Type': 'application/x-www-form-urlencoded'
        }), 
    };
      setData = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  getDetails();



  return (
    <View style={styles.container}>
      <Text>Tv shows</Text>

      <View style={styles.image}>
        <image src=""></image>
      </View>

      <View style={styles.box}>
        <Text>{data.results.original_name}</Text>
      </View>

      <View>
        <Text style={styles.voteText}>{data.results.vote_average}</Text>
        <Text style={styles.popularityText}>{data.results.popularity}</Text>
      </View>

      <View>
      <Text style={styles.verviewTitle}>Overview</Text>
        <Text style={styles.overviewText}>{data.results.overview}</Text>
      </View>

      <TouchableOpacity>
        <Text style={styles.button}>Discover</Text>
      </TouchableOpacity>

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
  },

  image: {
    margin: 5,
    padding: 10
  },
  button{
    backgroundColor: 'red',
    borderRadius: 5,
    height: 5,
    width: 10,
    marginbottom: 2

  }
});
