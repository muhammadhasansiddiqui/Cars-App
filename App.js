import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

const CarApp = () => {
  const [cars, setCars] = useState([
    { id: '1', make: 'Toyota', model: 'Corolla', price: '$20,000', imageUri: 'https://th.bing.com/th/id/OIG1.FSltPwa7OZ4JUJ.CdqRs?w=1024&h=1024&rs=1&pid=ImgDetMain', description: 'The Toyota Corolla is a line of subcompact and compact cars manufactured by Toyota.' },
    { id: '2', make:  'Honda', model: 'Civic', price: '$18,000', imageUri: 'https://th.bing.com/th/id/OIG1.Ei5eBUCZlb7msgMRwjlB?w=1024&h=1024&rs=1&pid=ImgDetMain', description: 'The Honda Civic is a line of cars manufactured by Honda.' },
    { id: '3', make:   'Ford', model: 'Focus', price: '$15,000', imageUri: 'https://th.bing.com/th/id/OIG4.b0uR7zP.VMkNqUgTpusw?w=1024&h=1024&rs=1&pid=ImgDetMain', description: 'The Ford Focus is a compact car manufactured by the Ford Motor Company.' },
    { id: '4', make:  'Tesla ', model: 'S', price: '$125223', imageUri: 'https://th.bing.com/th/id/OIG3.lREqiztHMAM5LsVWZXir?w=1024&h=1024&rs=1&pid=ImgDetMain', description: 'The Tesla Model S is an all-electric luxury sedan manufactured by Tesla, Inc.' },
    // Add more cars here
  ]);

  const [selectedCar, setSelectedCar] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        backgroundColor: '#DEB887',
        padding: 12,
        marginBottom: 8,
        borderRadius: 8,
      }}
      onPress={() => setSelectedCar(item)} // Set selected car
    >
      <Image
        source={{ uri: item.imageUri }}
        style={{ width: '100%', height: 250, marginBottom: 8 }}
      />
      <Text style={{ fontSize: 16, color: 'white' }}>
        {item.make} {item.model} ({item.price})
      </Text>
      <Text style={{ fontSize: 14, color: 'white', marginBottom: 8 }}>
        {item.description}
      </Text>
      <TouchableOpacity
        style={{ backgroundColor: 'orange', padding: 8, borderRadius: 4, alignSelf: 'flex-start' }}
        onPress={() => console.log(`See more about ${item.make} ${item.model}`)} // Example onPress function
      >
        <Text style={{ fontSize: 14, color: 'black' }}>See More</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ backgroundColor: 'green', padding: 8, borderRadius: 4, marginTop: 8 }}
        onPress={() => console.log(`Add ${item.make} ${item.model} to cart`)} // Example onPress function
      >
        <Text style={{ fontSize: 14, color: 'white' }}>Add to Cart</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 16, shadowColor: '#800000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 3, elevation: 5, backgroundColor: '#BC8F8F' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16, paddingTop: 16 ,color: '#fff', fontStyle: 'italic', fontFamily: 'monospace', textAlign: 'center' }}>
        Welcome to RideRanger
      </Text> 
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16, color: '#fff', textAlign: 'center', backgroundColor: 'red', padding: 8, borderRadius: 400 }}>
        Cars for Sale
      </Text>
      <FlatList
        data={cars}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      {selectedCar && (
        <View style={{ padding: 16, marginTop: 16 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8, color: '#000' }}>{selectedCar.make} {selectedCar.model}</Text>
          <Text style={{ color: '#000' }}>{selectedCar.description}</Text>
        </View>
      )}
    </View>
  );
};

export default CarApp;
