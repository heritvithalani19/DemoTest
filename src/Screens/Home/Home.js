// --------------- LIBRARIES ---------------
import * as React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StatusBar, NativeEventEmitter, Platform, Alert, FlatList, ScrollView, LayoutAnimation } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';

// --------------- ASSETS ---------------
import { loginStyle as styles } from './styles';
// import {} from '../../CommonConfig';
import { Input, Button, Loader, Header } from '../../Components/Common';
import { Matrics, Icons, Colors, Images, MainStyles, Constants, Fonts } from '../../CommonConfig';
import { Navigation } from '../../Helpers';
import { registerdeviceTokenRequest, logoutRequest } from '../../Redux/Actions';

// --------------- FUNCTION DECLARATION ---------------
const Home = ({ navigation }) => {
    // --------------- STATE ---------------
    const {
        Auth
    } = useSelector((state) => state);
    const dispatch = useDispatch();

    const insets = useSafeAreaInsets();

    const [list, setList] = React.useState([
        {
            id: 1,
            isExpand: false,
            title: 'Finku telah terdaftar secara resmi dan diawasi oleh pemerintah Indonesia',
            sub_cat: [
                {
                    id: 1,
                    title: 'Finku terdaftar di bawah KOMINFO yang memiliki SOP & pengaturan keamanan data yang ketat',
                    isExpand: false,
                    icon: Images.SUB_CAT1
                },
                {
                    id: 2,
                    title: 'Finku sudah secara resmi terdaftar sebagai PT',
                    isExpand: false,
                    iconText: '🏢'
                },
                {
                    id: 3,
                    title: 'Finku dikembangkan oleh tim dari Indonesia yang sudah mempelajari berbagai regulasi terkait keamanan data & privasi',
                    isExpand: false,
                    iconText: '🇮🇩'
                }
            ]

        },
        {
            id: 2,
            isExpand: false,
            title: 'Finku sangat serius & berdedikasi dalam menjaga keamanan datamu',
            sub_cat: [
                {
                    id: 1,
                    title: 'Finku memanfaatkan enkripsi canggih 256-AES, sama atau lebih tinggi dari rata-rata bank dan aplikasi Fintech di dunia',
                    isExpand: false,
                    iconText: '🔒'
                },
                {
                    id: 2,
                    title: 'Finku hanya memiliki akses baca (tidak bisa mengubah dan membuat aktivitas), dan hanya membaca data saldo & transaksimu',
                    isExpand: false,
                    iconText: '👁'
                },
                {
                    id: 3,
                    title: 'Finku memfasilitasi apabila kamu ingin menghapus akunmu, dan datamu akan Finku hapus secara menyeluruh',
                    isExpand: false,
                    iconText: '🗑'
                }
            ]

        },
        {
            id: 3,
            isExpand: false,
            title: 'Ketentuan privasi',
            sub_cat: [
                {
                    id: 1,
                    title: 'Finku tidak pernah dan tidak akan pernah menjual data apapun',
                    isExpand: false,
                    iconText: '🔒'
                },
                {
                    id: 2,
                    title: 'Finku memantau bagaimana kamu berinteraksi dengan app Finku (contoh: fitur mana yang kamu pakai dan tidak) untuk keperluan evaluasi & meningkatkan kepuasan kamu',
                    isExpand: false,
                    iconText: '📝'
                },
                {
                    id: 3,
                    title: 'Finku tidak pernah dan tidak akan pernah memberikan datamu ke perusahaan manapun tanpa izin kamu',
                    isExpand: false,
                    iconText: '🗑'
                },
                {
                    id: 4,
                    title: 'Selengkapnya tentang ketentuan privasi',
                    isExpand: false,
                    iconText: '📃',
                    subCont: [
                        {
                            id: 1,
                            title: 'Introduction',
                            content: 'Finku (“we” or “us” or “our”) respects the privacy of our users (“user” or “you”). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [name of website.com] [and our mobile application], including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site. We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the “Last Updated” date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Site, and you waive the right to receive specific notice of each such change or modification. You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Site after the date such revised Privacy Policy is posted.',

                        },
                        {
                            id: 2,
                            title: 'Collection of Your Information',
                            content: 'We may collect information about you in a variety of ways. The information we may collect on the Site includes'
                            // Personal Data: 'Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us [when you register with the Site [or our mobile application,] or] when you choose to participate in various activities related to the Site [and our mobile application], such as online chat and message boards and subscription to newsletters and promotional emails. You are under no obligation to provide us with personal information of any kind, however your refusal to do so may prevent you from using certain features of the Site [and our mobile application].Derivative Data: Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site. [If you are using our mobile application, this information may also include your device name and type, your operating system, your phone number, your country, your likes and replies to a post, and other interactions with the application and other users via server log files, as well as any other information you choose to provide.]Mobile Device Data: Device information, such as your mobile device ID, model, and manufacturer, and information about the location of your device, if you access the Site from a mobile device.Data From Contests, Giveaways, and Surveys: Personal and other information you may provide when entering contests or giveaways and/or responding to surveys.'
                        },
                        {
                            id: 3,
                            title: 'Use of Your Information',
                            content: 'Finku (“we” or “us” or “our”) respects the privacy of our users (“user” or “you”). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [name of website.com] [and our mobile application], including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the “Last Updated” date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Site, and you waive the right to receive specific notice of each such change or modification.You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Site after the date such revised Privacy Policy is posted.'
                        },
                        {
                            id: 4,
                            title: 'Disclosure of Your Information',
                            content: 'Finku (“we” or “us” or “our”) respects the privacy of our users (“user” or “you”). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [name of website.com] [and our mobile application], including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the “Last Updated” date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Site, and you waive the right to receive specific notice of each such change or modification.You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Site after the date such revised Privacy Policy is posted.'
                        },
                        {
                            id: 5,
                            title: 'Tracking Technologies',
                            content: 'Finku (“we” or “us” or “our”) respects the privacy of our users (“user” or “you”). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [name of website.com] [and our mobile application], including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the “Last Updated” date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Site, and you waive the right to receive specific notice of each such change or modification.You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Site after the date such revised Privacy Policy is posted.'
                        }
                    ]
                }
            ]

        }
    ])
    // --------------- LIFECYCLE ---------------
    React.useEffect(() => {
        setHeader()
    }, [])

    // --------------- METHODS ---------------
    const setHeader = () => {
        navigation.setOptions({

            headerLeft: () => {
                return (
                    <TouchableOpacity style={{ marginHorizontal: Matrics.s(15) }}
                        activeOpacity={0.7}
                    >
                        <Image source={Images.BACK} />
                    </TouchableOpacity>
                )
            },

            headerRight: (navigation) => {
                return (
                    <View />
                )
            },

        })
    }
    const onPressCategory = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
        const arr = [...list]
        arr[index]['isExpand'] = !arr[index]['isExpand']
        setList(arr)
    }

    const subCategory = (index, i) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
        let arr = [...list]

        if (arr[index]?.sub_cat[i]) {
            arr[index]['sub_cat'][i]['isExpand'] = !arr[index]['sub_cat'][i]['isExpand']
        }
        setList(arr)
    }
    // --------------- UI METHODS ---------------
    // --------------- RENDER ---------------
    return (

        <View edges={['bottom']} style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: Matrics.vs(16) }} showsVerticalScrollIndicator={false}>
                <Image
                    source={Images.LIST_CONT}
                    style={{ alignSelf: 'center', marginVertical: Matrics.vs(12) }}
                />

                <Text style={{
                    fontFamily: Fonts.REGULAR,
                    fontSize: Matrics.mvs(14),
                    color: Colors.SECONDARY_FONT_COLOR,
                    marginHorizontal: Matrics.s(32),
                    textAlign: 'center',
                    marginVertical: Matrics.mvs(12)

                }}>
                    {'Sebelum hubungkan akun finansialmu, baca dan pastikan 👇🏻'}
                </Text>

                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* {list.map(i, item)=> ()} */}
                    {list.map((item, index) => (
                        <View style={{}}>
                            <TouchableOpacity style={{ marginHorizontal: Matrics.s(16), backgroundColor: '#FFDBAC', borderRadius: Matrics.mvs(6), marginTop: Matrics.vs(12), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: Matrics.vs(12), borderBottomLeftRadius: item.isExpand ? 0 : Matrics.mvs(6), borderBottomRightRadius: item.isExpand ? 0 : Matrics.mvs(6) }}
                                activeOpacity={0.7}
                                onPress={() => onPressCategory(index)}
                            >
                                <Text style={{
                                    fontFamily: Fonts.BOLD,
                                    fontSize: Matrics.mvs(14),
                                    color: Colors.PRIMARY_FONT_COLOR,
                                    paddingHorizontal: Matrics.s(14),
                                    textAlign: 'left',
                                    flex: 1
                                }}
                                    numberOfLines={2}
                                >
                                    {item.title}
                                </Text>

                                <Image
                                    source={item.isExpand ? Images.UP : Images.DOWN}
                                    style={{ marginRight: Matrics.s(16) }}
                                />
                            </TouchableOpacity>
                            {item.isExpand == true && item?.sub_cat?.length > 0 && (
                                item?.sub_cat?.map((item, i) => (
                                    <TouchableOpacity activeOpacity={0.7} onPress={() => subCategory(index, i)}>
                                        <View style={{ backgroundColor: '#FFF7F2', marginHorizontal: Matrics.s(16), minHeight: Matrics.mvs(56), alignItems: 'center', flexDirection: 'row', paddingVertical: Matrics.mvs(16), paddingHorizontal: Matrics.s(12), borderTopLeftRadius: item.isExpand ? Matrics.mvs(6) : 0, borderBottomRightRadius: item.isExpand ? Matrics.mvs(6) : 0 }}>
                                            {item?.icon ? (
                                                <Image
                                                    source={Images.SUB_CAT1}
                                                />
                                            ) :
                                                (
                                                    <Text>
                                                        {item.iconText}
                                                    </Text>
                                                )
                                            }
                                            <Text style={{
                                                fontFamily: Fonts.MEDIUM,
                                                fontSize: Matrics.mvs(11),
                                                color: '#7B7B7B',
                                                paddingLeft: Matrics.s(14),
                                                textAlign: 'left',
                                                flex: 1
                                            }}
                                                numberOfLines={3}
                                            >
                                                {item.title}
                                            </Text>
                                            {item?.subCont?.length > 0 && (
                                                <Image
                                                    source={item?.isExpand ? Images.UP : Images.DOWN}
                                                    style={{ tintColor: '#7B7B7B' }}
                                                />
                                            )}
                                        </View>
                                        {item.isExpand == true && item?.subCont?.length > 0 && (
                                            item?.subCont?.map((item, i) => (
                                                <View style={{ marginHorizontal: Matrics.s(16), paddingVertical: Matrics.mvs(16), paddingHorizontal: Matrics.s(12), backgroundColor: '#FFF7F2' }}>
                                                    <Text
                                                        style={{ fontSize: Matrics.mvs(18), fontFamily: Fonts.BOLD, color: '#727272' }}
                                                    >{item.title}</Text>

                                                    <Text
                                                        style={{ fontSize: Matrics.mvs(11), fontFamily: Fonts.REGULAR, color: '#727272', marginVertical: Matrics.mvs(12) }}
                                                    >{item.content}</Text>
                                                </View>
                                            ))

                                        )
                                        }
                                        {item?.sub_cat?.length - 1 == i &&
                                            <View style={{ height: 1, marginHorizontal: Matrics.s(32) }}></View>
                                        }

                                    </TouchableOpacity>
                                ))
                            )}
                        </View>
                    ))}
                </ScrollView>

            </ScrollView>

            <View style={{ backgroundColor: '#FFFCF8', ...MainStyles.shadowUp, paddingBottom: insets.bottom }}>
                <TouchableOpacity style={{ height: Matrics.vs(42), backgroundColor: Colors.BUTTON_COLLOR, marginHorizontal: Matrics.s(20), borderRadius: Matrics.mvs(5), marginVertical: Matrics.vs(12), justifyContent: 'center', alignItems: 'center' }}>
                    <Text
                        style={{
                            fontFamily: Fonts.BOLD,
                            fontSize: Matrics.mvs(16),
                            color: Colors.WHITE

                        }}
                        numberOfLines={1}
                    >
                        {'Tambah Akun Finansialmu'}
                    </Text>
                </TouchableOpacity>
            </View>

        </View >
    );
};

export default Home;
