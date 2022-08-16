// import { useEffect, useState } from "react";
// import {
//   Button,
//   SafeAreaView,
//   StatusBar,
//   StyleSheet,
//   View,
// } from "react-native";
// import { mediaDevices, RTCView } from "react-native-webrtc";
// import { Participant, Room, Track } from 'livekit-client';
// import { useRoom, VideoView } from 'livekit-react-native';

// export default function App() {
//   const [stream, setStream] = useState(null);
//   const [room] = useState(() => new Room());
//   const [url] = useState('wss://livekit.appxify.com');
//   const [token] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2aWRlbyI6eyJyb29tSm9pbiI6dHJ1ZSwicm9vbSI6InJvb20xIiwiY2FuUHVibGlzaCI6dHJ1ZSwiY2FuU3Vic2NyaWJlIjp0cnVlfSwiaWF0IjoxNjYwNDk2MzA1LCJuYmYiOjE2NjA0OTYzMDUsImV4cCI6MTY2MDUxNzkwNSwiaXNzIjoiQVBJWXlIQ2ZrRGNTUGdkIiwic3ViIjoiYm9zc19vdmkiLCJqdGkiOiJib3NzX292aSJ9.VXHspDdG72WEt-HkLOi4EFThXbVYE_M8Hm7aEVKB46I');
//   const { participants } = useRoom(room);

//   useEffect(() => {
//     room.connect(url, token, {})
//     return () => {
//       room.disconnect()
//     }
//   }, [url, token, room]);


//   const start = async () => {
//     console.log("start");
//     if (!stream) {
//       let s;
//       try {
//         s = await mediaDevices.getUserMedia({ video: true });
//         setStream(s);
//       } catch (e) {
//         console.error(e);
//       }
//     }
//   };

//   const stop = () => {
//     console.log("stop");
//     if (stream) {
//       stream.release();
//       setStream(null);
//     }
//   };
//   const videoView = participants.length > 0 && (
//     <VideoView style={{ flex: 1, width: "100%" }} videoTrack={participants[0].getTrack(Track.Source.Camera)?.videoTrack} />
//   );

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <StatusBar barStyle="dark-content" />
//       {videoView}
//       {/* <View style={{ flex: 1 }}>
//         {stream && <RTCView streamURL={stream.toURL()} style={{ flex: 1 }} />}
//       </View>
//       <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
//         <Button title="Start" onPress={start} />
//         <Button title="Stop" onPress={stop} />
//       </View> */}
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
