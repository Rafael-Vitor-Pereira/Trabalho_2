import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { Lista } from '../data/Lista'

const ListPokemon = () => {
    return (
      <>
        <Text style={styles.titulo}>Meus Pokemons</Text>
        <FlatList 
          data={Lista}
          renderItem={({item}) => (
            <View style={styles.box}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Image source={{ uri: item.img }} style={styles.imagem} />
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </>
    )
}

export default ListPokemon

const styles = StyleSheet.create({
  titulo: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 30,
    color: '#FFF'
  },
  box: {
    width: '70%',
    height: 200,
    backgroundColor: '#CCC',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10
  },
  nome: {
    fontSize: 20
  },
  imagem: {
    width: 150,
    height: 140,
    marginTop: 10
  }
})