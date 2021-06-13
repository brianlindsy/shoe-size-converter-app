import React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { Text, Screen, Wallpaper } from "../../components"
import { color, spacing } from "../../theme"
import SegmentedControlTab from "react-native-segmented-control-tab";
import ModalDropdown from 'react-native-modal-dropdown';
import { Divider } from 'react-native-elements';
import {
  convertSize, mensUSSizes,
  mensUKSizes, mensEUSizes,
  mensConverseSizes, womensUSSizes,
  womensUKSizes, womensEUSizes,
  womensConverseSizes, kidsEUSizes,
  kidsUKSizes, kidsUSSizes, kidsConverseSizes,
  babyEUSizes, babyUKSizes, babyUSSizes, 
  babyConverseSizes
} from '../../utils/conversion-utils'
import {
  AdMobBanner,
} from 'expo-ads-admob';
import Constants from 'expo-constants';
import {translate} from '../../i18n/translate'

const FULL: ViewStyle = { flex: 1}
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
  justifyContent: "space-evenly"
}
const BOLD: TextStyle = { fontWeight: "bold" }
const TITLE: TextStyle = {
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
  marginBottom: spacing[5],
  marginTop: spacing[5],
  color: 'black'
}
const CONTENT: TextStyle = {
  color: "black",
  fontSize: 24,
  marginBottom: spacing[5],
}
const LABEL: TextStyle = {
  color: "black",
  fontSize: 24,
  marginBottom: spacing[1],
}
const SELECTOR: ViewStyle = {
  marginBottom: spacing[5]
}
const DIVIDER: ViewStyle = {
  backgroundColor: "black",
  marginBottom: spacing[5]
}
const FROM_CONVERT: ViewStyle = {
  justifyContent: "space-evenly"
}
const TO_CONVERT: ViewStyle = {
  justifyContent: "space-evenly"
}
const SIZE_INPUT: ViewStyle = {
  flexDirection: "column",
  alignItems: "center",
  marginBottom: spacing[5]
}
const SIZE_INPUT_TITLE: ViewStyle = {
  flexDirection: "row",
}
const CONVERTED: ViewStyle = {
  alignItems: "center",
  marginBottom:spacing[6]
}
const CONVERTED_TEXT: TextStyle = {
  fontSize: 50,
  color: "green"
}
const MODAL_SELECTED_TEXT: TextStyle = {
  fontSize: 25,
  width: 175
}
const MODAL_DROPDOWN_TEXT: TextStyle = {
  fontSize: 30,
  width: 175
}

const testID = 'ca-app-pub-3940256099942544/6300978111';
const productionID = 'ca-app-pub-8812453476407098/5349752535';
// Is a real device and running in production.
const adUnitID = Constants.isDevice && !__DEV__ ? productionID : testID;

const convertPersonTypeIntl = (value) => {
    if(value === "Men"){
      return <Text style={CONTENT} tx="shoeSizeConverterScreen.men"/>;
    } else if (value === "Woman"){
      return <Text style={CONTENT} tx="shoeSizeConverterScreen.woman"/>;
    } else if (value === "Child"){
      return <Text style={CONTENT} tx="shoeSizeConverterScreen.child"/>;
    } else {
      return <Text style={CONTENT} tx="shoeSizeConverterScreen.baby"/>;
    }
  }


export const ShoeSizeConveterScreen = observer(function ShoeSizeConveterScreen() {
  const personType = ["Men", "Woman", "Child", "Baby"];
  const personTypeIntl = [
                        translate("shoeSizeConverterScreen.men"),
                        translate("shoeSizeConverterScreen.woman"),
                        translate("shoeSizeConverterScreen.child"),
                        translate("shoeSizeConverterScreen.baby"),
                      ];
  const shoeSizeType = ["US", "UK", "Euro", "Converse"];
  const [selectedPersonTypeIndex, setSelectedPersonTypeIndex] = React.useState(0);
  const [selectedConversionTypeIndex, setSelectedConversionTypeIndex] = React.useState(0);
  const [conversionTypeSizeValues, setConversionTypeSizeValues] = React.useState(mensUSSizes);
  const [convertFromValue, setConvertFromValue] = React.useState(-1);

  const [selectedConversionToTypeIndex, setSelectedConversionToTypeIndex] = React.useState(0);

  const shoeSizeTypeString = shoeSizeType[selectedConversionTypeIndex];
  const personTypeString = personType[selectedPersonTypeIndex];

  const onChangeConversionToType = (value) => {
    setSelectedConversionToTypeIndex(value);
  };

  const onModalSelect = (index, value) => {
    setConvertFromValue(value);
  };

  const convertedSizeText = () => {
    var convertedSizeNumber = convertSize(convertFromValue, selectedPersonTypeIndex, selectedConversionTypeIndex, selectedConversionToTypeIndex);
    if(convertedSizeNumber > 0){
      return shoeSizeType[selectedConversionToTypeIndex] + " " + translate("shoeSizeConverterScreen.convertFromSize") + convertedSizeNumber;
    } else if (convertFromValue === -1) {
      return ""
    } else {
      return <Text style={CONTENT} tx="shoeSizeConverterScreen.noConversion"/>;
    }
  };

  const onChangePersonType = (value) => {
    setSelectedPersonTypeIndex(value);
    if(value == 0){
      if(selectedConversionTypeIndex === 2){
        setConversionTypeSizeValues(mensEUSizes);
      } else if(selectedConversionTypeIndex == 0){
        setConversionTypeSizeValues(mensUSSizes);
      } else if(selectedConversionTypeIndex == 1){
        setConversionTypeSizeValues(mensUKSizes);
      } else if(selectedConversionTypeIndex === 3){
        setConversionTypeSizeValues(mensConverseSizes);
      }
    } else if(value == 1){
      if(selectedConversionTypeIndex === 2){
        setConversionTypeSizeValues(womensEUSizes);
      } else if(selectedConversionTypeIndex == 0){
        setConversionTypeSizeValues(womensUSSizes);
      } else if(selectedConversionTypeIndex == 1){
        setConversionTypeSizeValues(womensUKSizes);
      } else if(selectedConversionTypeIndex === 3){
        setConversionTypeSizeValues(womensConverseSizes);
      }
    } else if(value == 2){
      if(selectedConversionTypeIndex === 2){
        setConversionTypeSizeValues(kidsEUSizes);
      } else if(selectedConversionTypeIndex == 0){
        setConversionTypeSizeValues(kidsUSSizes);
      } else if(selectedConversionTypeIndex == 1){
        setConversionTypeSizeValues(kidsUKSizes);
      } else if(selectedConversionTypeIndex === 3){
        setConversionTypeSizeValues(kidsConverseSizes);
      }
    } else if(value == 3){
      if(selectedConversionTypeIndex === 2){
        setConversionTypeSizeValues(babyEUSizes);
      } else if(selectedConversionTypeIndex == 0){
        setConversionTypeSizeValues(babyUSSizes);
      } else if(selectedConversionTypeIndex == 1){
        setConversionTypeSizeValues(babyUKSizes);
      } else if(selectedConversionTypeIndex === 3){
        setConversionTypeSizeValues(babyConverseSizes);
      }
    }
  };

  const removeNegatives = (list) => {
    return list.filter(function(x){ return x !== -1 });
  };

  const onChangeConversionType = (value) => {
    setSelectedConversionTypeIndex(value);
    if(selectedPersonTypeIndex == 0){
      if(value === 2){
        setConversionTypeSizeValues(mensEUSizes);
      }else if(value == 0){
        setConversionTypeSizeValues(mensUSSizes);
      } else if(value == 1){
        setConversionTypeSizeValues(mensUKSizes);
      } else if(value === 3){
        setConversionTypeSizeValues(mensConverseSizes);
      }
    } else if(selectedPersonTypeIndex == 1){
      if(value === 2){
        setConversionTypeSizeValues(womensEUSizes);
      } else if(value == 0){
        setConversionTypeSizeValues(womensUSSizes);
      } else if(value == 1){
        setConversionTypeSizeValues(womensUKSizes);
      } else if(value === 3){
        setConversionTypeSizeValues(womensConverseSizes);
      }
    } else if(selectedPersonTypeIndex == 2){
      if(value === 2){
        setConversionTypeSizeValues(kidsEUSizes);
      } else if(value == 0){
        setConversionTypeSizeValues(kidsUSSizes);
      } else if(value == 1){
        setConversionTypeSizeValues(kidsUKSizes);
      } else if(value === 3){
        setConversionTypeSizeValues(kidsConverseSizes);
      }
    } else if(selectedPersonTypeIndex == 3){
      if(value === 2){
        setConversionTypeSizeValues(babyEUSizes);
      } else if(value == 0){
        setConversionTypeSizeValues(babyUSSizes);
      } else if(value == 1){
        setConversionTypeSizeValues(babyUKSizes);
      } else if(value === 3){
        setConversionTypeSizeValues(babyConverseSizes);
      }
    }
  };

  return (
    <View testID="ShoeSizeConveterScreen" style={FULL}>
      <Wallpaper />
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <Text style={TITLE} preset="header" tx="shoeSizeConverterScreen.title" />
        <Divider style={DIVIDER}/>
        <View style={FROM_CONVERT}>
          <Text style={LABEL} tx="shoeSizeConverterScreen.convertFrom"/>
          <SegmentedControlTab
            tabStyle={SELECTOR}
            values={personTypeIntl}
            selectedIndex={selectedPersonTypeIndex}
            onTabPress={onChangePersonType}
          />
          <SegmentedControlTab
            tabStyle={SELECTOR}
            values={shoeSizeType}
            selectedIndex={selectedConversionTypeIndex}
            onTabPress={onChangeConversionType}
          />
          <View style={SIZE_INPUT}>
            <View style={SIZE_INPUT_TITLE}>
              <Text style={CONTENT}>{convertPersonTypeIntl(personTypeString)}</Text>
              <Text style={CONTENT}> </Text>
              <Text style={CONTENT} tx="shoeSizeConverterScreen.convertFromSize"/>
            </View>
            <ModalDropdown
              onSelect={(index, value) => onModalSelect(index, value)}
              defaultValue={translate("shoeSizeConverterScreen.modalTitlePrefix") + shoeSizeTypeString}
              options={removeNegatives(conversionTypeSizeValues)}
              dropdownTextHighlightStyle={MODAL_SELECTED_TEXT}
              dropdownTextStyle={MODAL_DROPDOWN_TEXT}
              dropdownStyle={MODAL_SELECTED_TEXT}
              textStyle={MODAL_SELECTED_TEXT}/>
          </View>
        </View>
        <Divider style={DIVIDER}/>
        <View style={TO_CONVERT}>
          <Text style={LABEL} tx="shoeSizeConverterScreen.convertTo"/>
          <SegmentedControlTab
            tabStyle={SELECTOR}
            values={shoeSizeType}
            selectedIndex={selectedConversionToTypeIndex}
            onTabPress={onChangeConversionToType}
          />
        </View>
        <Divider style={DIVIDER}/>
        <View style={CONVERTED}>
          <Text style={CONVERTED_TEXT}>{convertedSizeText()}</Text>
        </View>
        <AdMobBanner
          bannerSize="banner"
          adUnitID={adUnitID}/>
      </Screen>
    </View>
  )
})
