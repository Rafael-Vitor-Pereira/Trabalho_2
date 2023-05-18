import { StyleSheet, SafeAreaView } from 'react-native'
import ListPokemon from './src/Components/pokemons'

const App = () => {
  return (
    <SafeAreaView style={styles.safearea}>
      <ListPokemon />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: '#000'
  }
})