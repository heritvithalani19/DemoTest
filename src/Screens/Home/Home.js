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
                    isSubCont: true,
                    subCont: [
                        {
                            id: 1,
                            title: 'Introduction',
                            content: 'Finku (“we” or “us” or “our”) respects the privacy of our users (“user” or “you”). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [name of website.com] [and our mobile application], including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.\n\n We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the “Last Updated” date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Site, and you waive the right to receive specific notice of each such change or modification.\n\n You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Site after the date such revised Privacy Policy is posted.',
                            textType: 0

                        },
                        {
                            id: 2,
                            title: 'Collection of Your Information',
                            content: `We may collect information about you in a variety of ways. The information we may collect on the Site includes:\n\n Personal Data: Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us [when you register with the Site [or our mobile application,] or] when you choose to participate in various activities related to the Site [and our mobile application], such as online chat and message boards and subscription to newsletters and promotional emails. You are under no obligation to provide us with personal information of any kind, however your refusal to do so may prevent you from using certain features of the Site [and our mobile application].\n\nDerivative Data: Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site. [If you are using our mobile application, this information may also include your device name and type, your operating system, your phone number, your country, your likes and replies to a post, and other interactions with the application and other users via server log files, as well as any other information you choose to provide.]\n\nMobile Device Data: Device information, such as your mobile device ID, model, and manufacturer, and information about the location of your device, if you access the Site from a mobile device.\n\nData From Contests, Giveaways, and Surveys: Personal and other information you may provide when entering contests or giveaways and/or responding to surveys.`,
                            textType: 1
                        },
                        {
                            id: 3,
                            title: 'Use of Your Information',
                            content: `Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site [or our mobile application] to:\n\n \u25CF Administer sweepstakes, promotions, and contests.Compile anonymous statistical data and analysis for use internally or with third parties.\n\u25CFCreate and manage your account.
                            Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Site [and our mobile application] to you.
                            Email you regarding your account or order.
                            Enable user-to-user communications.
                            Generate a personal profile about you to make future visits to the Site [and our mobile application] more personalized.
                            Increase the efficiency and operation of the Site [and our mobile application].
                            Monitor and analyze usage and trends to improve your experience with the Site [and our mobile application].
                            Notify you of updates to the Site [and our mobile application].
                            Offer new products, services, [mobile applications,] and/or recommendations to you.
                            Perform other business activities as needed.
                            Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.
                            Request feedback and contact you about your use of the Site [and our mobile application].
                            Resolve disputes and troubleshoot problems.
                            Respond to product and customer service requests.
                            Send you a newsletter.
                            Solicit support for the Site [and our mobile application].`,
                            textType: 2
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
                                            {item?.isSubCont && (
                                                <Image
                                                    source={item?.isExpand ? Images.UP : Images.DOWN}
                                                    style={{ tintColor: '#7B7B7B' }}
                                                />
                                            )}
                                        </View>
                                        {item.isExpand == true && item?.isSubCont == true && (
                                            <View style={{ marginHorizontal: Matrics.s(16), paddingVertical: Matrics.mvs(16), paddingHorizontal: Matrics.s(12), backgroundColor: '#FFF7F2' }}>
                                                <Text style={{ fontSize: Matrics.mvs(18), fontFamily: Fonts.BOLD, color: '#727272', marginVertical: Matrics.vs(12) }}>{'Introduction'}</Text>
                                                <Text style={{ fontSize: Matrics.mvs(11), fontFamily: Fonts.REGULAR, color: '#727272' }}>{'Finku (“we” or “us” or “our”) respects the privacy of our users (“user” or “you”). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [name of website.com] [and our mobile application], including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.\n\n We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the “Last Updated” date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Site, and you waive the right to receive specific notice of each such change or modification.\n\nYou are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Site after the date such revised Privacy Policy is posted.'}</Text>

                                                <Text style={{ fontSize: Matrics.mvs(18), fontFamily: Fonts.BOLD, color: '#727272', marginVertical: Matrics.vs(12) }}>{'Collection of Your Information'}</Text>

                                                <Text style={{ fontSize: Matrics.mvs(11), fontFamily: Fonts.REGULAR, color: '#727272' }}>
                                                    {'We may collect information about you in a variety of ways. The information we may collect on the Site includes:\n\n'}
                                                    <Text style={{ fontFamily: Fonts.BOLD }}>
                                                        {'Personal Data:'}
                                                    </Text>
                                                    {'Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us [when you register with the Site [or our mobile application,] or] when you choose to participate in various activities related to the Site [and our mobile application], such as online chat and message boards and subscription to newsletters and promotional emails. You are under no obligation to provide us with personal information of any kind, however your refusal to do so may prevent you from using certain features of the Site [and our mobile application].'}
                                                    <Text style={{ fontFamily: Fonts.BOLD }}>
                                                        {'\n\nDerivative Data:'}
                                                    </Text>
                                                    {'Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site. [If you are using our mobile application, this information may also include your device name and type, your operating system, your phone number, your country, your likes and replies to a post, and other interactions with the application and other users via server log files, as well as any other information you choose to provide.]'}
                                                    <Text style={{ fontFamily: Fonts.BOLD }}>
                                                        {'\n\nMobile Device Data:'}
                                                    </Text>
                                                    {'Device information, such as your mobile device ID, model, and manufacturer, and information about the location of your device, if you access the Site from a mobile device.'}
                                                    <Text style={{ fontFamily: Fonts.BOLD }}>
                                                        {'\n\nData From Contests, Giveaways, and Surveys:'}
                                                    </Text>
                                                    {'Personal and other information you may provide when entering contests or giveaways and/or responding to surveys.'}

                                                </Text>

                                                <Text style={{ fontSize: Matrics.mvs(18), fontFamily: Fonts.BOLD, color: '#727272', marginVertical: Matrics.vs(12) }}>{'Use of Your Information'}</Text>



                                                <Text style={{ fontSize: Matrics.mvs(11), fontFamily: Fonts.REGULAR, color: '#727272' }}>
                                                    {'Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site [or our mobile application] to:\n'}
                                                </Text>

                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ color: '#727272' }}>
                                                        {'\u2219'}
                                                    </Text>

                                                    <Text style={{ fontSize: Matrics.mvs(11), fontFamily: Fonts.REGULAR, color: '#727272' }}>
                                                        {'Administer sweepstakes, promotions, and contests.'}
                                                    </Text>
                                                </View>

                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ color: '#727272' }}>
                                                        {'\u2219'}
                                                    </Text>

                                                    <Text style={{ fontSize: Matrics.mvs(11), fontFamily: Fonts.REGULAR, color: '#727272' }}>
                                                        {'Compile anonymous statistical data and analysis for use internally or with third parties.'}
                                                    </Text>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ color: '#727272' }}>
                                                        {'\u2219'}
                                                    </Text>

                                                    <Text style={{ fontSize: Matrics.mvs(11), fontFamily: Fonts.REGULAR, color: '#727272' }}>
                                                        {'Create and manage your account.'}
                                                    </Text>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ color: '#727272' }}>
                                                        {'\u2219'}
                                                    </Text>

                                                    <Text style={{ fontSize: Matrics.mvs(11), fontFamily: Fonts.REGULAR, color: '#727272' }}>
                                                        {'Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Site [and our mobile application] to you.'}
                                                    </Text>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ color: '#727272' }}>
                                                        {'\u2219'}
                                                    </Text>

                                                    <Text style={{ fontSize: Matrics.mvs(11), fontFamily: Fonts.REGULAR, color: '#727272' }}>
                                                        {'Email you regarding your account or order.'}
                                                    </Text>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ color: '#727272' }}>
                                                        {'\u2219'}
                                                    </Text>

                                                    <Text style={{ fontSize: Matrics.mvs(11), fontFamily: Fonts.REGULAR, color: '#727272' }}>
                                                        {'Enable user-to-user communications.'}
                                                    </Text>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ color: '#727272' }}>
                                                        {'\u2219'}
                                                    </Text>

                                                    <Text style={{ fontSize: Matrics.mvs(11), fontFamily: Fonts.REGULAR, color: '#727272' }}>
                                                        {'Generate a personal profile about you to make future visits to the Site [and our mobile application] more personalized.'}
                                                    </Text>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ color: '#727272' }}>
                                                        {'\u2219'}
                                                    </Text>

                                                    <Text style={{ fontSize: Matrics.mvs(11), fontFamily: Fonts.REGULAR, color: '#727272' }}>
                                                        {'Increase the efficiency and operation of the Site [and our mobile application].'}
                                                    </Text>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ color: '#727272' }}>
                                                        {'\u2219'}
                                                    </Text>

                                                    <Text style={{ fontSize: Matrics.mvs(11), fontFamily: Fonts.REGULAR, color: '#727272' }}>
                                                        {'Monitor and analyze usage and trends to improve your experience with the Site [and our mobile application].'}
                                                    </Text>
                                                </View>

                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ color: '#727272' }}>
                                                        {'\u2219'}
                                                    </Text>

                                                    <Text style={{ fontSize: Matrics.mvs(11), fontFamily: Fonts.REGULAR, color: '#727272' }}>
                                                        {'Notify you of updates to the Site [and our mobile application].'}
                                                    </Text>
                                                </View>

                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ color: '#727272' }}>
                                                        {'\u2219'}
                                                    </Text>

                                                    <Text style={{ fontSize: Matrics.mvs(11), fontFamily: Fonts.REGULAR, color: '#727272' }}>
                                                        {'Offer new products, services, [mobile applications,] and/or recommendations to you.'}
                                                    </Text>
                                                </View>

                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ color: '#727272' }}>
                                                        {'\u2219'}
                                                    </Text>

                                                    <Text style={{ fontSize: Matrics.mvs(11), fontFamily: Fonts.REGULAR, color: '#727272' }}>
                                                        {'Perform other business activities as needed.'}
                                                    </Text>
                                                </View>

                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ color: '#727272' }}>
                                                        {'\u2219'}
                                                    </Text>

                                                    <Text style={{ fontSize: Matrics.mvs(11), fontFamily: Fonts.REGULAR, color: '#727272' }}>
                                                        {'Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.'}
                                                    </Text>
                                                </View>

                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ color: '#727272' }}>
                                                        {'\u2219'}
                                                    </Text>

                                                    <Text style={{ fontSize: Matrics.mvs(11), fontFamily: Fonts.REGULAR, color: '#727272' }}>
                                                        {'Request feedback and contact you about your use of the Site [and our mobile application].'}
                                                    </Text>
                                                </View>

                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ color: '#727272' }}>
                                                        {'\u2219'}
                                                    </Text>

                                                    <Text style={{ fontSize: Matrics.mvs(11), fontFamily: Fonts.REGULAR, color: '#727272' }}>
                                                        {'Resolve disputes and troubleshoot problems.'}
                                                    </Text>
                                                </View>

                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ color: '#727272' }}>
                                                        {'\u2219'}
                                                    </Text>

                                                    <Text style={{ fontSize: Matrics.mvs(11), fontFamily: Fonts.REGULAR, color: '#727272' }}>
                                                        {'Respond to product and customer service requests.'}
                                                    </Text>
                                                </View>

                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ color: '#727272' }}>
                                                        {'\u2219'}
                                                    </Text>

                                                    <Text style={{ fontSize: Matrics.mvs(11), fontFamily: Fonts.REGULAR, color: '#727272' }}>
                                                        {'Send you a newsletter.'}
                                                    </Text>
                                                </View>

                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ color: '#727272' }}>
                                                        {'\u2219'}
                                                    </Text>

                                                    <Text style={{ fontSize: Matrics.mvs(11), fontFamily: Fonts.REGULAR, color: '#727272' }}>
                                                        {'Solicit support for the Site [and our mobile application].'}
                                                    </Text>
                                                </View>

                                                <Text style={{ fontSize: Matrics.mvs(18), fontFamily: Fonts.BOLD, color: '#727272', marginVertical: Matrics.vs(12) }}>{'Disclosure of Your Information'}</Text>

                                                <Text style={{ fontSize: Matrics.mvs(11), fontFamily: Fonts.REGULAR, color: '#727272' }}>
                                                    {'We may share information we have collected about you in certain situations. Your information may be disclosed as follows:\n\n'}
                                                    <Text style={{ fontFamily: Fonts.BOLD }}>
                                                        {'By Law or to Protect Rights:'}
                                                    </Text>
                                                    {' If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation. This includes exchanging information with other entities for fraud protection and credit risk reduction.'}
                                                    <Text style={{ fontFamily: Fonts.BOLD }}>
                                                        {'\n\nThird-Party Service Providers:'}
                                                    </Text>
                                                    {'We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.'}
                                                    <Text style={{ fontFamily: Fonts.BOLD }}>
                                                        {'\n\nMarketing Communications:'}
                                                    </Text>
                                                    {'With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.Interactions with Other Users: If you interact with other users of the Site [and our mobile application], those users may see your name, profile photo, and descriptions of your activity, including sending invitations to other users, chatting with other users, liking posts, following blogs.'}
                                                    <Text style={{ fontFamily: Fonts.BOLD }}>
                                                        {'\n\nOnline Posting:'}
                                                    </Text>
                                                    {'When you post comments, contributions or other content to the Site [or our mobile applications], your posts may be viewed by all users and may be publicly distributed outside the Site [and our mobile application] in perpetuity.'}
                                                    <Text style={{ fontFamily: Fonts.BOLD }}>
                                                        {'\n\nThird-Party Advertisers:'}
                                                    </Text>
                                                    {'We may use third-party advertising companies to serve ads when you visit the Site [or our mobile application]. These companies may use information about your visits to the Site [and our mobile application] and other websites that are contained in web cookies in order to provide advertisements about goods and services of interest to you.'}
                                                    <Text style={{ fontFamily: Fonts.BOLD }}>
                                                        {'\n\nAffiliates:'}
                                                    </Text>
                                                    {'We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include our parent company and any subsidiaries, joint venture partners or other companies that we control or that are under common control with us.'}

                                                    <Text style={{ fontFamily: Fonts.BOLD }}>
                                                        {'\n\nBusiness Partners: '}
                                                    </Text>
                                                    {'We may share your information with our business partners to offer you certain products, services or promotions.'}
                                                </Text>



                                                <Text style={{ fontSize: Matrics.mvs(18), fontFamily: Fonts.BOLD, color: '#727272', marginVertical: Matrics.vs(12) }}>{'Tracking Technologies'}</Text>
                                                <Text style={{ fontSize: Matrics.mvs(11), fontFamily: Fonts.REGULAR, color: '#727272' }}>
                                                    <Text style={{ fontFamily: Fonts.BOLD }}>
                                                        {'Cookies and Web Beacons:'}
                                                    </Text>
                                                    {' We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site [and our mobile application] to help customize the Site [and our mobile application] and improve your experience. When you access the Site [or our mobile application], your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site [or our mobile application]. You may not decline web beacons. However, they can be rendered ineffective by declining all cookies or by modifying your web browser’s settings to notify you each time a cookie is tendered, permitting you to accept or decline cookies on an individual basis.'}
                                                    <Text style={{ fontFamily: Fonts.BOLD }}>
                                                        {'\n\nInternet-Based Advertising:'}
                                                    </Text>
                                                    {'Additionally, we may use third-party software to serve ads on the Site [and our mobile application], implement email marketing campaigns, and manage other interactive marketing initiatives. This third-party software may use cookies or similar tracking technology to help manage and optimize your online experience with us. For more information about opting-out of interest-based ads, visit the Network Advertising Initiative Opt-Out Tool or Digital Advertising Alliance Opt-Out Tool.'}
                                                    <Text style={{ fontFamily: Fonts.BOLD }}>
                                                        {'\n\nWebsite and Email:'}
                                                    </Text>
                                                    {'We may also partner with selected third-party vendors, such as Google Analytics others, to allow tracking technologies and remarketing services on the Site [and our mobile application] through the use of first party cookies and third-party cookies, to, among other things, analyze and track users’ use of the Site [and our mobile application] , determine the popularity of certain content and better understand online activity. By accessing the Site[,our mobile application,], you consent to the collection and use of your information by these third-party vendors. You are encouraged to review their privacy policy and contact them directly for responses to your questions. We do not transfer personal information to these third-party vendors. However, if you do not want any information to be collected and used by tracking technologies, you can visit the third-party vendor or the Network Advertising Initiative Opt-Out Tool or Digital Advertising Alliance Opt-Out Tool.'}
                                                </Text>
                                            </View>
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
