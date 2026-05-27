import React, { useState, useContext, useRef, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, FlatList, TouchableOpacity, } from 'react-native';
import EventDetailsBottomSheet from '../components/EventDetailsBottomSheet';
import MallBottomSheet from '../components/MallBottomSheet';
import DateFilterBottomSheet from '../components/DateFilterBottomSheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {

    const events = [
        {
            id: '1',
            title: 'Winter Fashion Show',
            category: 'Fashion',
            mall: 'Phoenix Mall',
            time: '7:00 PM',
            date: 'Today',
            location: 'Main Atrium',
            image: 'https://picsum.photos/seed/1/400/200',
        },
        {
            id: '2',
            title: 'Music Concert',
            mall: 'DLF Mall',
            category: 'Music',
            date: 'Today',
            time: '8:30 PM',
            location: 'City Hall',
            image: 'https://picsum.photos/seed/2/400/200',
        },
        {
            id: '3',
            title: 'Art Exhibition',
            mall: 'DLF Mall',
            date: 'Tomorrow',
            category: 'Arts',
            time: '5:00 PM',
            location: 'Art Gallery',
            image: 'https://picsum.photos/seed/3/400/200',
        },
        {
            id: '4',
            title: 'Badminton Tournament',
            mall: 'Pacific Mall',
            category: 'Sports',
            date: 'Tomorrow',
            time: '10:00 AM',
            location: 'National Stadium',
            image: 'https://picsum.photos/seed/4/400/200',
        },
        {
            id: '5',
            title: 'Kids Carnival',
            mall: 'Lulu Mall',
            category: 'Kids',
            date: 'This Week',
            time: '4:00 PM',
            location: 'Fun Zone',
            image: 'https://picsum.photos/seed/5/400/200',
        },
        {
            id: '6',
            title: 'Summer Fashion Show',
            mall: 'Ambience Mall',
            category: 'Fashion',
            date: 'This Week',
            time: '7:00 PM',
            location: 'Main Atrium',
            image: 'https://picsum.photos/seed/1/400/200',
        },
        {
            id: '7',
            title: 'Concert ',
            mall: 'City Walk',
            category: 'Music',
            date: 'This Week',
            time: '8:30 PM',
            location: 'City Hall',
            image: 'https://picsum.photos/seed/2/400/200',
        },
        {
            id: '8',
            title: 'Food Festival',
            mall: 'Phoenix Mall',
            category: 'Food',
            date: 'All Dates',
            time: '5:00 PM',
            location: 'Mittal Foods',
            image: 'https://picsum.photos/seed/3/400/200',
        },
        {
            id: '9',
            title: 'Football Match',
            mall: 'Pacific Mall',
            category: 'Sports',
            date: 'All Dates',
            time: '6:00 PM',
            location: 'National Stadium',
            image: 'https://picsum.photos/seed/4/400/200',
        },
        {
            id: '10',
            title: 'Indoor Games',
            mall: 'Lulu Mall',
            category: 'Kids',
            date: 'All Dates',
            time: '4:00 PM',
            location: 'Fun Zone',
            image: 'https://picsum.photos/seed/5/400/200',
        },
    ];
    // const [selectedCategory, setSelectedCategory]=useState('All');
    const categories = [
        { name: 'All', icon: 'grid-outline' },
        { name: 'Music', icon: 'musical-notes-outline' },
        { name: 'Arts', icon: 'color-palette-outline' },
        { name: 'Fashion', icon: 'shirt-outline' },
        { name: 'Food', icon: 'restaurant-outline' },
        { name: 'Sports', icon: 'football-outline' },
        { name: 'Tech', icon: 'laptop-outline' },
        { name: 'Kids', icon: 'happy-outline' },
    ];
    const malls = [
        'All Malls',
        'Phoenix Mall',
        'DLF Mall',
        'Lulu Mall',
        'Pacific Mall',
        'Ambience Mall',
        'City Walk',
    ];
    const dateOptions = [
        'All Dates',
        'Today',
        'Tomorrow',
        'This Week',
    ];
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchText, setSearchText] = useState('');
    const [selectedMall, setSelectedMall] = useState('All Malls');
    const [selectedDate, setSelectedDate] = useState('All Dates');

    const bottomSheetRef = useRef(null);
    const mallSheetRef = useRef(null);
    const dateSheetRef = useRef(null);

    const [selectedEvent, setSelectedEvent] = useState(null);

    //     const openEventDetails = (event) => {
    //   setSelectedEvent(event);

    //   setTimeout(() => {
    //     alert(
    //       typeof bottomSheetRef.current?.expand
    //     );
    //   }, 500);
    // };
    useEffect(() => {
        // console.log('selectedEvent:', selectedEvent);

        if (selectedEvent) {
            console.log('expanding...');
            bottomSheetRef.current?.present();
        }
    }, [selectedEvent]);
    const openEventDetails = (event) => {
        setSelectedEvent(event);
    };
    const openMallSheet = () => {
        mallSheetRef.current?.present();
    };
    const openDateSheet = () => {
        dateSheetRef.current?.present();
    };



    // const [wishlist, setWishlist] = useState([]);
    const { wishlist, reservations, toggleWishlist, addReservation, theme, toggleTheme, isDarkTheme, } = useContext(AppContext);

    const filteredEvents = events.filter((event) => {
        const categoryMatch = selectedCategory === 'All' || event.category === selectedCategory;
        const searchMatch = searchText.trim() === '' || event.title.toLowerCase().includes(searchText.toLowerCase());
        const mallMatch = selectedMall === 'All Malls' || event.mall === selectedMall;
        const dateMatch = selectedDate === 'All Dates' || event.date === selectedDate;

        return categoryMatch && searchMatch && mallMatch && dateMatch;
    });



    return (

        <SafeAreaView style={{ flex: 1 }}>
            <View style={[styles.container, { backgroundColor: theme.background, },]} >
                {/* <View style={styles.header}>

                    <View style={styles.headerRow}>
                        {/* <Icon name="arrow-back" size={22} color="#fff" /> */}
                {/* <Text style={styles.headerTitle}>   Events</Text> */}
                {/* title
                    </View>

                    <Text style={styles.headerSubtitle}> Discover what's happening </Text>
                </View> */}

                {/* <View style={styles.searchRow}>
                    <View style={styles.searchContainer}>
                        <Icon name="search-outline" size={19} color="white" />

                        <TextInput
                            placeholder="Search events"
                            placeholderTextColor="#888"
                            value={searchText}
                            onChangeText={(text) => setSearchText(text)}
                            style={{ flex: 1, color: '#fff', }}
                        />
                    </View>

                    {/* Calendar Icon */}
                {/* <TouchableOpacity style={styles.calendarButton}>
                        <Icon name="calendar-outline" size={20} color="black" />
                    </TouchableOpacity>

                </View> */}
                {/* <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 15 }} >
                    {categories.map((item, index) => (
                        // <View key={index} style={styles.tab}>
                        <TouchableOpacity
                            key={index} style={[styles.tab, selectedCategory === item.name && styles.activeTab]}
                            onPress={() => setSelectedCategory(item.name)}
                        >

                            <Icon name={item.icon} size={16} color="black" />

                            <Text style={{ marginLeft: 5 }}>
                                {item.name}
                            </Text>

                        </TouchableOpacity>
                    ))}
                </ScrollView> */}
                {/* <TouchableOpacity
                    style={{
                        backgroundColor: '#f5c542',
                        padding: 10,
                        margin: 10,
                        borderRadius: 10,
                    }}
                    onPress={() =>
                        setSelectedMall('Phoenix Mall')
                    }
                >
                    <Text>Show Phoenix Mall Events</Text>
                </TouchableOpacity> */}

                <FlatList
                    ListHeaderComponent={
                        <>

                            {/* Header */}

                            <View style={styles.header}>
                                <View style={styles.headerRow}>
                                    <Text
                                        style={[styles.headerTitle, { color: theme.text }]} > Events ❤️ {wishlist.length} </Text>

                                    <TouchableOpacity onPress={toggleTheme}   >
                                        <Icon
                                            name={isDarkTheme ? 'sunny-outline' : 'moon-outline'}
                                            size={24}
                                            color={theme.text}
                                        />
                                    </TouchableOpacity>
                                </View>

                                <Text
                                    style={[styles.headerSubtitle, { color: theme.subText, },]} >  Discover what's happening
                                </Text>

                            </View>


                            {/* Search */}

                            <View style={styles.searchRow}>

                                <View style={styles.searchContainer}>

                                    <Icon
                                        name="search-outline"
                                        size={20}
                                        color="#888"
                                        style={{ marginRight: 8 }}
                                    />

                                    <TextInput
                                        placeholder="Search events"
                                        placeholderTextColor="#888"
                                        value={searchText}
                                        onChangeText={setSearchText}
                                        style={{
                                            flex: 1,
                                            color: theme.text,
                                        }}
                                    />

                                    {searchText.length > 0 && (

                                        <TouchableOpacity
                                            onPress={() => setSearchText('')}
                                        >
                                            <Icon
                                                name="close-circle"
                                                size={22}
                                                color="#888"
                                            />
                                        </TouchableOpacity>

                                    )}

                                </View>

                                <TouchableOpacity
                                    style={styles.calendarButton}
                                    onPress={openDateSheet}
                                >

                                    <Icon
                                        name="calendar-outline"
                                        size={20}
                                        color="black"
                                    />

                                </TouchableOpacity>

                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginHorizontal: 16,
                                    marginTop: 15,
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: '#f5c542',
                                        // marginHorizontal: 16,
                                        // marginTop: 15,
                                        flex: 1, // to take up remaining space after clear button
                                        paddingHorizontal: 16, //added for space left side of name                                    marginTop: 15,
                                        // paddingVertical: 12,
                                        height: 50,
                                        borderRadius: 12,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                    onPress={openMallSheet}
                                >
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontWeight: '600',
                                            color: '#000',
                                        }}
                                    >
                                        {selectedMall}
                                    </Text>

                                    <Icon
                                        name="chevron-down"
                                        size={20}
                                        color="#000"
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        marginLeft: 10,
                                        backgroundColor: '#2c2c2e',
                                        paddingHorizontal: 16,
                                        // paddingVertical: 12, 
                                        height: 50,
                                        borderRadius: 12,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}

                                    onPress={() => {
                                        setSelectedMall('All Malls');
                                        setSelectedDate('All Dates');
                                        setSelectedCategory('All');
                                        setSearchText('');
                                    }}
                                >
                                    <Text style={{ color: '#fff', fontWeight: '600', }}  >
                                        Clear
                                    </Text>
                                </TouchableOpacity>
                            </View>


                            {/* Categories */}

                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                style={{ marginTop: 15 }}
                            >

                                {categories.map((item, index) => (

                                    <TouchableOpacity
                                        key={index}

                                        style={[
                                            styles.tab,
                                            selectedCategory === item.name &&
                                            styles.activeTab
                                        ]}

                                        onPress={() => {
                                            if (selectedCategory === item.name) {
                                                setSelectedCategory('All');
                                            }
                                            else { setSelectedCategory(item.name); }
                                        }}
                                    >

                                        <Icon
                                            name={item.icon}
                                            size={16}
                                            color="black"
                                        />

                                        <Text style={{ marginLeft: 5 }}>
                                            {item.name}
                                        </Text>

                                    </TouchableOpacity>

                                ))}

                            </ScrollView>

                        </>
                    }
                    data={filteredEvents}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => {
                        const isReserved =
                            reservations?.some(
                                reservation =>
                                    reservation.id === item.id
                            );
                        return (
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => {
                                    openEventDetails(item)
                                }}
                                style={{ marginBottom: 15 }}
                            >
                                <View style={[styles.card, { backgroundColor: theme.card, },]}>

                                    {/* Image */}
                                    <View style={styles.imageContainer}>
                                        <Image source={{ uri: item.image }} style={styles.image} />

                                        <View style={styles.dateBadge}>
                                            <Text style={styles.badgeText}>15 May</Text>
                                        </View>

                                        <View style={styles.categoryBadge}>
                                            <Text style={styles.badgeText}> {item.category}</Text>
                                        </View>
                                    </View>

                                    {/* Content */}
                                    <View style={styles.cardContent}>
                                        <Text
                                            style={[styles.cardTitle, { color: theme.text, },]} >{item.title}
                                        </Text>
                                        {/* ////////////// */}
                                        <TouchableOpacity
                                            style={styles.heartButton}
                                            onPress={() => toggleWishlist(item)}
                                        >

                                            <Icon
                                                name={
                                                    wishlist.some(
                                                        (wishItem) =>
                                                            wishItem.id === item.id
                                                    )
                                                        ? 'heart'
                                                        : 'heart-outline'
                                                }

                                                size={24}

                                                color={
                                                    wishlist.some(
                                                        (wishItem) =>
                                                            wishItem.id === item.id
                                                    )
                                                        ? 'red'
                                                        : '#fff'
                                                }
                                            />

                                        </TouchableOpacity>

                                        <View style={styles.bottomRow}>
                                            <View style={styles.leftInfo}>
                                                {/* Time */}
                                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                                    <Icon name="time-outline" size={16} color="#ccc" />
                                                    <Text
                                                        style={[styles.infoText, { color: theme.subText, },]}  >{item.time}
                                                    </Text>
                                                </View>
                                                {/* Mall */}
                                                {/* <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                                <Icon name="business-outline" size={16} color="#ccc" />
                                                <Text style={[styles.infoText, { color: theme.subText }]}>
                                                    {item.mall}
                                                </Text>
                                            </View> */}
                                                {/* Location */}

                                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                                    <Icon name="location-outline" size={16} color="#ccc" />
                                                    <Text style={[styles.infoText, { color: theme.subText, },]}>
                                                        {item.location}
                                                    </Text>
                                                </View>

                                            </View>

                                            <TouchableOpacity
                                                style={[
                                                    styles.button,
                                                    isReserved && {
                                                        backgroundColor: '#4CAF50'
                                                    }
                                                ]}
                                                disabled={isReserved}
                                                onPress={() => addReservation(item)}
                                            >
                                                <Text style={styles.buttonText}>
                                                    {isReserved
                                                        ? '✓ Reserved'
                                                        : 'Reserve Spot'}
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                </View>

                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
            <EventDetailsBottomSheet
                ref={bottomSheetRef}
                selectedEvent={selectedEvent}
            />
            <MallBottomSheet
                ref={mallSheetRef}
                malls={malls}
                selectedMall={selectedMall}
                setSelectedMall={setSelectedMall}
            />
            <DateFilterBottomSheet
                ref={dateSheetRef}
                dateOptions={dateOptions}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />
        </SafeAreaView>

    );
};


export default HomeScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'black',
        padding: 10,
    },
    text: {
        fontSize: 20,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'Blue',
    },

    subtitle: {
        color: 'yellow',
        fontSize: 20,
    },
    search: {
        backgroundColor: '#ccc',
        marginTop: 20,
        borderRadius: 20,
        margin: 16,
        padding: 10
    },
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16,
        marginTop: 15,
    },

    calendarButton: {
        marginLeft: 10,
        backgroundColor: '#ccc',
        padding: 10,
        width: 50,
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1f1f23',
        // marginHorizontal: 16,
        // marginTop: 15,
        paddingHorizontal: 14,
        borderRadius: 12,
        height: 50,
    },
    tab: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    activeTab: {
        backgroundColor: '#f5c542',
    },
    image: {
        width: '100%',
        height: 130,
    },
    card: {
        backgroundColor: '#1c1c1e',
        margin: 10,
        borderRadius: 12,
        overflow: "hidden", //for rounded image corners
        elevation: 5, //for shadow on android
    },
    cardContent: {
        padding: 8,
    },

    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },

    cardSub: {
        color: 'gray',
    },
    imageContainer: {
        position: 'relative',
    },

    dateBadge: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: '#555',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 10,
    },

    categoryBadge: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'purple',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 10,
    },

    badgeText: {
        color: '#fff',
        fontSize: 12,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    heartButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
    },


    button: {
        backgroundColor: '#f5c542',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 15,
        alignSelf: 'flex-end',
        marginTop: 10,
    },

    buttonText: {
        fontWeight: 'bold',
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },

    leftInfo: {
        flexDirection: 'row',
        gap: 10, // spacing between time & location
    },

    infoText: {
        color: 'gray',
    },
    header: {
        paddingHorizontal: 16,
        paddingTop: 10,
        marginBottom: 10,
    },

    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    backIcon: {
        fontSize: 20,
        color: '#fff',
        marginRight: 10,
    },

    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
    },

    headerSubtitle: {
        color: '#aaaaaae6',
        marginTop: 5,
        fontSize: 14,
    },
});