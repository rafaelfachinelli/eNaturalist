import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Header from '../components/Header/Header';

export default function WhatIs() {
  return (
    <ScrollView style={styles.container}>
      <Header/>

      <Text style={styles.titleGreen}>O que é e-Lixo!</Text>

      <View style={styles.backgroundGreen}>
        <Text 
          style={styles.textJustify}
        >
          Um eletrônico com defeito ou que não possui mais utilidade pode ser 
          considerado um e-lixo. 
          Praticamente tudo que tenha um PLUG DE TOMADA ou BATERIA.
        </Text>
      </View>

      <ScrollView showsHorizontalScrollIndicator horizontal>
        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam maiores voluptates, voluptatum rerum possimus unde nobis dolores expedita quo sapiente molestias dignissimos! Impedit pariatur molestiae, odit eveniet exercitationem maxime quisquam.</Text>
      </ScrollView>

      <Text style={styles.titleGreen}>Descarte</Text>

      <View style={styles.backgroundGreen}>
        <View style={styles.backgroundRed} >
          <Text style={styles.titleWhite}>DESCARTE INCORRETO</Text>
          <Text style={styles.textCenter}>Descartado em:</Text> 
          <Text style={styles.textCenter}>Meio ambiente</Text>
          <Text style={styles.textCenter}>Lixo comum</Text>
          <Text style={styles.textCenter}>Aterro sanitári</Text>
        </View>
        <View style={styles.backgroundBlue} >
          <Text style={styles.titleWhite}>DESCARTE CORRETO</Text>
          <Text style={styles.textCenter}>Descartado em:</Text> 
          <Text style={styles.textCenter}>Ponto de Entrega Voluntário</Text>
          <Text style={styles.textCenter}>Ecoponto</Text>
        </View>
      </View>

      <Text style={styles.titleGreen}>Consequências</Text>

      <View style={styles.backgroundGreen}>
        <Text style={styles.textJustify}>
          Na composição do e-lixo encontramos metais pesados que causam 
          danos permanentes ao meio ambiente e aos seres vivos.
        </Text>

        <View style={styles.backgroundPurple}>
          <Text style={styles.titleWhite}>Mercúrio</Text>
          <Text style={styles.textJustify}>
            A exposição contribui para danos 
            cerebrais, renais e problemas de desenvolvimento de feto, podendo 
            contaminar o leite materno e os peixes.
          </Text>
          <Text style={styles.textJustify}>
            A sua ingestão ou inalação causa danos ao sistema nervoso 
            central e aos rins.
          </Text>
        </View>

        <View style={styles.backgroundPurple}>
          <Text style={styles.titleWhite}>Cádmio</Text>
          <Text style={styles.textJustify}>
            Sua concentração no organismo é cumulativa e pode causar problemas 
            de rins, danos na estrutura óssea, além de ser cancerígino.
          </Text>
        </View>

        <View style={styles.backgroundPurple}>
          <Text style={styles.titleWhite}>Arsênico</Text>
          <Text style={styles.textJustify}>
            Causa doenças de pele, prejudica o sistema nervoso central e 
            pode causar câncer de pulmão.
          </Text>
        </View>

        <View style={styles.backgroundPurple}>
          <Text style={styles.titleWhite}>Cromo hexavalante</Text>
          <Text style={styles.textJustify}>
            Causa bronquite asmática e deformações no DNA.
          </Text>
        </View>

        <View style={styles.backgroundPurple}>
          <Text style={styles.titleWhite}>Retardantes de chamas</Text>
          <Text style={styles.textJustify}>
            Causam desordens hormonais, nervosas e reprodutivas.
          </Text>
        </View>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },

  titleGreen: {
    fontFamily: 'Archivo_700Bold',
    color: '#219653',
    fontSize: 18,
    marginVertical: 20,
    textAlign: "center",
  },

  titleWhite: {
    fontFamily: 'Archivo_700Bold',
    color: '#e0e0e0',
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },

  textJustify: {
    fontFamily: 'Archivo_400Regular',
    color: '#e0e0e0',
    fontSize: 14,
    textAlign: "justify",
    marginVertical: 5,
  },

  textCenter: {
    fontFamily: 'Archivo_400Regular',
    color: '#e0e0e0',
    fontSize: 14,
    textAlign: "center",
    marginVertical: 5,
  },

  backgroundGreen: {
    backgroundColor: '#219653',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  backgroundRed: {
    backgroundColor: '#EB5757',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'column',
    marginVertical: 10,
    borderRadius: 10,
  },

  backgroundBlue: {
    backgroundColor: '#2F80ED',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 10,
  },

  backgroundPurple: {
    backgroundColor: '#9B51E0',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  
});