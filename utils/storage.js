import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveFav = async (value) => {
    try {
                                console.log("---------------------------")
        const myFavoris = await AsyncStorage.getItem('Favoris')
        if (myFavoris == null) {
            let newFavoris = []
            newFavoris.push(value)
            AsyncStorage.setItem('Favoris', JSON.stringify(newFavoris))
        } else {
            if (JSON.parse(myFavoris).find((el) => el === value)) {
                let removeItem = JSON.parse(myFavoris).filter((el) => el !== value)
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