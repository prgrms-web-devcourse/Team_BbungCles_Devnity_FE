import { Editor } from "@toast-ui/react-editor";
import { useEffect, useRef } from "react";
import { errorCode } from "../constants";
import { requestMedia } from "../utils/apis";

const useToastUi = () => {
  const editorRef = useRef<Editor>();

  useEffect(() => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();

      editorInstance.removeHook("addImageBlobHook");
      editorInstance.addHook("addImageBlobHook", async (blob, callback) => {
        try {
          const { data, status } = await requestMedia(blob);

          if (status === errorCode.OK && data.data.mediaUrl) {
            callback(data.data.mediaUrl, "image");
          }
        } catch (error) {
          // TODO: alert 처리
          // eslint-disable-next-line
          alert(error.response.data.error);
        }
      });
    }
  }, []);

  return [editorRef];
};

export default useToastUi;
