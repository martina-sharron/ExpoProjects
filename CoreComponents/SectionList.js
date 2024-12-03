import React, { useState } from 'react'
import { View, Text, SectionList, StyleSheet, StatusBar } from 'react-native'
import { data } from './data'

const Section = () => {
  const [highlightedSection, setHighlightedSection] = useState(null)

  const onViewableItemsChanged = ({ viewableItems }) => {
    const visibleSection = viewableItems.find(item => item.section)
    if (visibleSection) {
      setHighlightedSection(visibleSection.section.title)
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <SectionList
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        SectionSeparatorComponent={() => <View style={styles.separator} />}
        stickySectionHeadersEnabled={true}
        sections={data}
        keyExtractor={(item, index) => item.email + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} - {item.email}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => {
          const isHighlighted = highlightedSection === title
          return (
            <View
              style={[
                styles.header,
                isHighlighted && styles.highlightedHeader,
              ]}
            >
              <Text style={[styles.headerText, isHighlighted && styles.highlightedText]}>
                {title}
              </Text>
            </View>
          )
        }}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  header: {
    backgroundColor: '#f1f1f1',
    paddingVertical: 10,
    paddingHorizontal: 15,
    zIndex: 1,
  },
  highlightedHeader: {
    backgroundColor: '#0f0f0f',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'grey',
  },
  highlightedText: {
    color: '#fff',
  },
  item: {
    padding: 10,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'grey',
  },
  separator: {
    height: 16,
  },
})

export default Section
