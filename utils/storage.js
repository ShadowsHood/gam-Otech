import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveFav = async (value) => {
    // console.log('---------------------VALUE : ',value.id)
    
    try {
    console.log("---------------------------")
        const myFavoris = await AsyncStorage.getItem('Favoris')
        if (myFavoris == null) {
            let brandNewFavoris = []
            brandNewFavoris.push(value)
    console.log("brandNewFavoris : ",brandNewFavoris)
            AsyncStorage.setItem('Favoris', JSON.stringify(brandNewFavoris))
        } else {
            if (JSON.parse(myFavoris).find((el) => el.id === value.id)) {
                let removeItem = JSON.parse(myFavoris).filter((el) => el.id !== value.id)
    console.log("removeItem : ",removeItem)
                AsyncStorage.setItem('Favoris', JSON.stringify(removeItem))
            } else {
                let allFavoris = JSON.parse(myFavoris)
                let newFavoris = [...allFavoris, value]
    console.log("newFavoris : ",newFavoris)
                AsyncStorage.setItem('Favoris', JSON.stringify(newFavoris))
            }
        }
    } catch (e) {
        // saving error
        console.log('ERROR-------------', e)
    }
}

export const getFav = async () => {
    try {
        const myFavoris = await AsyncStorage.getItem('Favoris')
        if (myFavoris != null) {
            const jsonFavoris = JSON.parse(myFavoris)
            let allFavoris = []
            jsonFavoris.forEach((element) => {
                allFavoris.push(element);
            })
            return allFavoris;
        } else {
            console.log("error when getting the favoris")
        }
    } catch (e) {
        // error reading value
    }
}

export const removeFav = async () => {
    try {
        await AsyncStorage.removeItem('Favoris')
    } catch (e) {
        // error reading value
    }
}