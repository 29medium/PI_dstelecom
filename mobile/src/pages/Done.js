import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import colors from '../config/colors';

const Done = ({navigation}) => {
  Alert.alert('Avaliação', 'Quer avaliar a aplicação?', [
    {
      text: 'Mais tarde',
    },
    {
      text: 'Sim',
      onPress: () => navigation.push('UserExperience'),
    },
  ]);

  return (
    <View style={styles.background}>
      <Image
        style={styles.logo}
        source={require('../assets/logo-black.png')}></Image>

      <View style={styles.container}>
        <Image
          source={require('../assets/redCheck.png')}
          style={{width: 100, height: 100}}
        />
        <Text style={styles.text}> Trabalho concluído com sucesso! </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.popToTop()}>
          <Text style={styles.buttonText}>Página inicial</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    paddingLeft: 10,
    paddingTop: 15,
    color: colors.logoGreyDark,
    fontWeight: 'bold',
    alignItems: 'center',
  },

  background: {
    flex: 1,
    backgroundColor: colors.logoGreyDark,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: colors.lightGrey,
  },
  logo: {
    width: '90%',
    height: '30%',
    resizeMode: 'contain',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    position: 'absolute',
    bottom: 0,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    backgroundColor: colors.red,
    paddingTop: 14,
    paddingBottom: 14,
    marginVertical: 30,
    marginHorizontal: 20,
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default Done;
