import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 30,
  },

  title: {
    fontSize: 20,
    color: '#444',
    paddingHorizontal: 20,
    marginBottom: 15,
  },

  bold: {
    fontWeight: 'bold',
  },

  list: {
    paddingHorizontal: 20,
  },

  listItem: {
    marginRight: 15,
  },

  thumbnail: {
    width: 200,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 2,
  },

  company: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },

  price: {
    fontSize: 15,
    color: '#999',
    marginTop: 5,
  },

  button: {
    height: 32,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginTop: 15,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
