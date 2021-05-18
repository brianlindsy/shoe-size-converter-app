export const mensUSSizes = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11.5, 12, 13, 14, 15, 16];
export const mensEUSizes = [40, 40, 41, 41, 42, 42, 43, 43, 44, 44, 45, 45, 46, 47, 48, 49, 50];
export const mensConverseSizes = [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14, -1];
export const mensUKSizes = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12, 13, 14, 15];

export const womensUSSizes = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5];
export const womensEUSizes = [35, 35, 36, 36, 37, 37, 38, 38, 39, 39, 40, 40, 41, 41, 42, 42, 43, 43];
export const womensConverseSizes = [-1, -1, -1, -1, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, -1, -1, -1];
export const womensUKSizes = [2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5];

export const kidsUSSizes = [10.5, 11, 11.5, 12, 12.5, 13, 13.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6];
export const kidsUKSizes = [9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5];
export const kidsEUSizes = [27, 27.5, 28, 28.5, 29, 30, 30.5, 31.5, 32.5, 33, 33.5, 34, 35, -1, 36, 37, -1, -1];
export const kidsConverseSizes = [-1, 10, -1, 11, -1, 12, -1, 1, -1, 2, -1, 3, -1, 4, -1, 5];

export const babyUSSizes = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10];
export const babyUKSizes = [-1, -1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9];
export const babyEUSizes = [16, 16, 17, 17, 18, 18, 19, 20, 20, 21, 21, 22, 22, 23, 24, 25, 26, 27, 27];
export const babyConverseSizes = [1, -1, 2, -1, 3, -1, 4, -1, 5, -1, 6, -1, 7, -1, 8, -1, 9, -1, 9];


export const convertSize = (convertFromValue, selectedPersonTypeIndex, selectedConversionTypeIndex, selectedConversionToTypeIndex) => {
    var fromValue = convertFromValue;

    var converted;
    if(selectedPersonTypeIndex == 0){
      if(selectedConversionTypeIndex == 0){
        if(selectedConversionToTypeIndex == 0){
          var index = mensUSSizes.indexOf(Number(fromValue));
          converted = mensUSSizes[index];
        } else if (selectedConversionToTypeIndex == 1){
          var index = mensUSSizes.indexOf(Number(fromValue));
          converted = mensUKSizes[index];
        } else if(selectedConversionToTypeIndex == 2){
          var index = mensUSSizes.indexOf(Number(fromValue));
          converted = mensEUSizes[index];
        } else if(selectedConversionToTypeIndex == 3){
          var index = mensUSSizes.indexOf(Number(fromValue));
          converted = mensConverseSizes[index];
        }
      } else if(selectedConversionTypeIndex == 1){
        if(selectedConversionToTypeIndex == 0){
          var index = mensUKSizes.indexOf(Number(fromValue));
          converted = mensUSSizes[index];
        } else if (selectedConversionToTypeIndex == 1){
          var index = mensUKSizes.indexOf(Number(fromValue));
          converted = mensUKSizes[index];
        } else if(selectedConversionToTypeIndex == 2){
          var index = mensUKSizes.indexOf(Number(fromValue));
          converted = mensEUSizes[index];
        } else if(selectedConversionToTypeIndex == 3){
          var index = mensUKSizes.indexOf(Number(fromValue));
          converted = mensConverseSizes[index];
        }
      } else if (selectedConversionTypeIndex == 2){
        if(selectedConversionToTypeIndex == 0){
          var index = mensEUSizes.indexOf(Number(fromValue));
          converted = mensUSSizes[index];
        } else if (selectedConversionToTypeIndex == 1){
          var index = mensEUSizes.indexOf(Number(fromValue));
          converted = mensUKSizes[index];
        } else if(selectedConversionToTypeIndex == 2){
          var index = mensEUSizes.indexOf(Number(fromValue));
          converted = mensEUSizes[index];
        } else if(selectedConversionToTypeIndex == 3){
          var index = mensEUSizes.indexOf(Number(fromValue));
          converted = mensConverseSizes[index];
        }
      } else if (selectedConversionTypeIndex == 3){
        if(selectedConversionToTypeIndex == 0){
          var index = mensConverseSizes.indexOf(Number(fromValue));
          converted = mensUSSizes[index];
        } else if (selectedConversionToTypeIndex == 1){
          var index = mensConverseSizes.indexOf(Number(fromValue));
          converted = mensUKSizes[index];
        } else if(selectedConversionToTypeIndex == 2){
          var index = mensConverseSizes.indexOf(Number(fromValue));
          converted = mensEUSizes[index];
        } else if(selectedConversionToTypeIndex == 3){
          var index = mensConverseSizes.indexOf(Number(fromValue));
          converted = mensConverseSizes[index];
        }
      }
    } else if(selectedPersonTypeIndex == 1) {
      if(selectedConversionTypeIndex == 0){
        if(selectedConversionToTypeIndex == 0){
          var index = womensUSSizes.indexOf(Number(fromValue));
          converted = womensUSSizes[index];
        } else if (selectedConversionToTypeIndex == 1){
          var index = womensUSSizes.indexOf(Number(fromValue));
          converted = mensUKSizes[index];
        } else if(selectedConversionToTypeIndex == 2){
          var index = womensUSSizes.indexOf(Number(fromValue));
          converted = womensEUSizes[index];
        } else if(selectedConversionToTypeIndex == 3){
          var index = womensUSSizes.indexOf(Number(fromValue));
          converted = womensConverseSizes[index];
        }
      } else if(selectedConversionTypeIndex == 1){
        if(selectedConversionToTypeIndex == 0){
          var index = womensUKSizes.indexOf(Number(fromValue));
          converted = womensUSSizes[index];
        } else if (selectedConversionToTypeIndex == 1){
          var index = womensUKSizes.indexOf(Number(fromValue));
          converted = womensUKSizes[index];
        } else if(selectedConversionToTypeIndex == 2){
          var index = womensUKSizes.indexOf(Number(fromValue));
          converted = womensEUSizes[index];
        } else if(selectedConversionToTypeIndex == 3){
          var index = womensUKSizes.indexOf(Number(fromValue));
          converted = womensConverseSizes[index];
        }
      } else if (selectedConversionTypeIndex == 2){
        if(selectedConversionToTypeIndex == 0){
          var index = womensEUSizes.indexOf(Number(fromValue));
          converted = womensUSSizes[index];
        } else if (selectedConversionToTypeIndex == 1){
          var index = womensEUSizes.indexOf(Number(fromValue));
          converted = womensUKSizes[index];
        } else if(selectedConversionToTypeIndex == 2){
          var index = womensEUSizes.indexOf(Number(fromValue));
          converted = womensEUSizes[index];
        } else if(selectedConversionToTypeIndex == 3){
          var index = womensEUSizes.indexOf(Number(fromValue));
          converted = womensConverseSizes[index];
        }
      } else if (selectedConversionTypeIndex == 3){
        if(selectedConversionToTypeIndex == 0){
          var index = womensConverseSizes.indexOf(Number(fromValue));
          converted = womensUSSizes[index];
        } else if (selectedConversionToTypeIndex == 1){
          var index = womensConverseSizes.indexOf(Number(fromValue));
          converted = womensUKSizes[index];
        } else if(selectedConversionToTypeIndex == 2){
          var index = womensConverseSizes.indexOf(Number(fromValue));
          converted = womensEUSizes[index];
        } else if(selectedConversionToTypeIndex == 3){
          var index = womensConverseSizes.indexOf(Number(fromValue));
          converted = womensConverseSizes[index];
        }
      }
    } else if(selectedPersonTypeIndex == 2){
      if(selectedConversionTypeIndex == 0){
        if(selectedConversionToTypeIndex == 0){
          var index = kidsUSSizes.indexOf(Number(fromValue));
          converted = kidsUSSizes[index];
        } else if (selectedConversionToTypeIndex == 1){
          var index = kidsUSSizes.indexOf(Number(fromValue));
          converted = kidsUKSizes[index];
        } else if(selectedConversionToTypeIndex == 2){
          var index = kidsUSSizes.indexOf(Number(fromValue));
          converted = kidsEUSizes[index];
        } else if(selectedConversionToTypeIndex == 3){
          var index = kidsUSSizes.indexOf(Number(fromValue));
          converted = kidsConverseSizes[index];
        }
      } else if(selectedConversionTypeIndex == 1){
        if(selectedConversionToTypeIndex == 0){
          var index = kidsUKSizes.indexOf(Number(fromValue));
          converted = kidsUSSizes[index];
        } else if (selectedConversionToTypeIndex == 1){
          var index = kidsUKSizes.indexOf(Number(fromValue));
          converted = kidsUKSizes[index];
        } else if(selectedConversionToTypeIndex == 2){
          var index = kidsUKSizes.indexOf(Number(fromValue));
          converted = kidsEUSizes[index];
        } else if(selectedConversionToTypeIndex == 3){
          var index = kidsUKSizes.indexOf(Number(fromValue));
          converted = kidsConverseSizes[index];
        }
      } else if (selectedConversionTypeIndex == 2){
        if(selectedConversionToTypeIndex == 0){
          var index = kidsEUSizes.indexOf(Number(fromValue));
          converted = kidsUSSizes[index];
        } else if (selectedConversionToTypeIndex == 1){
          var index = kidsEUSizes.indexOf(Number(fromValue));
          converted = kidsUKSizes[index];
        } else if(selectedConversionToTypeIndex == 2){
          var index = kidsEUSizes.indexOf(Number(fromValue));
          converted = kidsEUSizes[index];
        } else if(selectedConversionToTypeIndex == 3){
          var index = kidsEUSizes.indexOf(Number(fromValue));
          converted = kidsConverseSizes[index];
        }
      } else if (selectedConversionTypeIndex == 3){
        if(selectedConversionToTypeIndex == 0){
          var index = kidsConverseSizes.indexOf(Number(fromValue));
          converted = kidsUSSizes[index];
        } else if (selectedConversionToTypeIndex == 1){
          var index = kidsConverseSizes.indexOf(Number(fromValue));
          converted = kidsUKSizes[index];
        } else if(selectedConversionToTypeIndex == 2){
          var index = kidsConverseSizes.indexOf(Number(fromValue));
          converted = kidsEUSizes[index];
        } else if(selectedConversionToTypeIndex == 3){
          var index = kidsConverseSizes.indexOf(Number(fromValue));
          converted = kidsConverseSizes[index];
        }
      }
    } else if(selectedPersonTypeIndex == 3){
      if(selectedConversionTypeIndex == 0){
        if(selectedConversionToTypeIndex == 0){
          var index = babyUSSizes.indexOf(Number(fromValue));
          converted = babyUSSizes[index];
        } else if (selectedConversionToTypeIndex == 1){
          var index = babyUSSizes.indexOf(Number(fromValue));
          converted = babyUKSizes[index];
        } else if(selectedConversionToTypeIndex == 2){
          var index = babyUSSizes.indexOf(Number(fromValue));
          converted = babyEUSizes[index];
        } else if(selectedConversionToTypeIndex == 3){
          var index = babyUSSizes.indexOf(Number(fromValue));
          converted = babyConverseSizes[index];
        }
      } else if(selectedConversionTypeIndex == 1){
        if(selectedConversionToTypeIndex == 0){
          var index = babyUKSizes.indexOf(Number(fromValue));
          converted = babyUSSizes[index];
        } else if (selectedConversionToTypeIndex == 1){
          var index = babyUKSizes.indexOf(Number(fromValue));
          converted = babyUKSizes[index];
        } else if(selectedConversionToTypeIndex == 2){
          var index = babyUKSizes.indexOf(Number(fromValue));
          converted = babyEUSizes[index];
        } else if(selectedConversionToTypeIndex == 3){
          var index = babyUKSizes.indexOf(Number(fromValue));
          converted = babyConverseSizes[index];
        }
      } else if (selectedConversionTypeIndex == 2){
        if(selectedConversionToTypeIndex == 0){
          var index = babyEUSizes.indexOf(Number(fromValue));
          converted = babyUSSizes[index];
        } else if (selectedConversionToTypeIndex == 1){
          var index = babyEUSizes.indexOf(Number(fromValue));
          converted = babyUKSizes[index];
        } else if(selectedConversionToTypeIndex == 2){
          var index = babyEUSizes.indexOf(Number(fromValue));
          converted = babyEUSizes[index];
        } else if(selectedConversionToTypeIndex == 3){
          var index = babyEUSizes.indexOf(Number(fromValue));
          converted = babyConverseSizes[index];
        }
      } else if (selectedConversionTypeIndex == 3){
        if(selectedConversionToTypeIndex == 0){
          var index = babyConverseSizes.indexOf(Number(fromValue));
          converted = babyUSSizes[index];
        } else if (selectedConversionToTypeIndex == 1){
          var index = babyConverseSizes.indexOf(Number(fromValue));
          converted = babyUKSizes[index];
        } else if(selectedConversionToTypeIndex == 2){
          var index = babyConverseSizes.indexOf(Number(fromValue));
          converted = babyEUSizes[index];
        } else if(selectedConversionToTypeIndex == 3){
          var index = babyConverseSizes.indexOf(Number(fromValue));
          converted = babyConverseSizes[index];
        }
      }
    }

    return converted;
  }