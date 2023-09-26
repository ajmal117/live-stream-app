import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

export const Room = () => {
  const { roomId } = useParams();

  //   function randomID(len) {
  //     let result = "";
  //     if (result) return result;
  //     var chars =
  //         "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
  //       maxPos = chars.length,
  //       i;
  //     len = len || 5;
  //     for (i = 0; i < len; i++) {
  //       result += chars.charAt(Math.floor(Math.random() * maxPos));
  //     }
  //     return result;
  //   }

  const myMeeting = async (element) => {
    const appID = 1653469905;
    const serverSecret = "e2100971b9c3cec04243b34d2f8182d2";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      //   randomID(5),
      //   randomID(5)
      Date.now().toString(),
      'Ajmal Ali '
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,

      sharedLinks: [
        {
          name: "Copy link ",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomId=" +
            roomId,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
      },
    });
  };

  return (
    <>
      <div ref={myMeeting}></div>
    </>
  );
};
