export const ImageData = {
    default : require('../assets/circle.png'),
    battleAxe : require('../assets/battle-axe.png'),
    potion : require('../assets/round-potion.png'),
    belt : require('../assets/belt-armor.png'),
    lasso : require('../assets/lasso.png')
}

const ItemsData = [
    {
        name: "BattleAxe",
        type: "Martial Melee Weapon",
        cost: "10 gp",
        weight: "4 lbs",
        count: "1",
        notes: "This item is of dwarven make.",
        image: 'battleAxe',
        description: "This is a battle axe"
    },
    {
        name: "Potion of Healing (Greater)",
        type: "Potion",
        cost: "100 gp",
        weight: ".5 lbs",
        count: "2",
        notes: "Heals 4d4 + 4",
        image: 'potion',
        description: "This is a battle potion"
    },
    {
        name: "Belt of Giant Strength",
        type: "Magic Armor",
        cost: "2,500 gp",
        weight: "1 lbs",
        count: "1",
        notes: "Strength is equal to 23",
        image: 'belt',
        description: "This is a giant's belt of strength"
    },
    {
        name: "Rope, Hempen (50 feet)",
        type: "Adventuring Gear",
        cost: "1 gp",
        weight: "10 lbs",
        count: "1",
        notes: "Its just rope.",
        image: 'lasso',
        description: "This is a rope"
    }
    
]


export const containersTestdata = [
    {
        name: "Anthony's Bag",
        description: "This is Anthonys bag",
        weight: 123,
        creator: 'kevin',
        holders: ['anthony']
    },
    {
        name: "Tommy's Bag",
        description: "This is Tommy's bag",
        weight: 123,
        creator: 'tommy',
        holders: ['tommy']
    },
    {
        name: "Anthony and Tommies shared bag",
        description: "This is a battle axe",
        weight: 123,
        creator: 'kevin',
        holders: ['anthony', 'tommy']
    },
    {
        name: "Eric's bag",
        description: "This is a erics bag",
        weight: 123,
        creator: 'kevin',
        holders: ['eric']
    },
    {
        name: "Eric's other bag",
        description: "This is a erics bag that he created",
        weight: 123,
        creator: 'eric',
        holders: ['eric', 'kevin']
    },
    {
        name: "Erkans's bag",
        description: "This is a Erkans bag",
        weight: 123,
        creator: 'kevin',
        holders: ['erkan']
    },
    {
        name: "Kevin's bag",
        description: "This is a Kevins bag",
        weight: 123,
        creator: 'kevin',
        holders: ['kevin']
    },
]


const usersTestData = [
    {
        name: "kevin",
        imageUrl: 'image'
    },
    {
        name: "anthony",
        imageUrl: 'image'
    },
    {
        name: "tommy",
        imageUrl: 'image'
    },
    {
        name: "eric",
        imageUrl: 'image'
    },
    {
        name: "erkan",
        imageUrl: 'image'
    }
]
    


export const getImageFromItem = (item)  => {
    const logoAttempt = item?.image === '' ? ImageData.default : ImageData[item?.image];
    return logoAttempt ? logoAttempt : ImageData.default;
}

