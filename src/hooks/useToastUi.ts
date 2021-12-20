import { Editor } from "@toast-ui/react-editor";
import { useCallback, useEffect, useRef } from "react";
import { errorCode } from "../constants";
import { requestMedia } from "../utils/apis";
import useCustomToast from "./useCustomToast";

const useToastUi = (): [typeof editorRef, typeof resetMarkDown] => {
  const [toast] = useCustomToast();

  const editorRef = useRef<Editor>();

  const resetMarkDown = useCallback(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().setMarkdown("");
    }
  }, [editorRef]);

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
          toast({ message: error.response.data.error });
        }
      });
    }
  }, [toast]);

  return [editorRef, resetMarkDown];
};

export default useToastUi;
