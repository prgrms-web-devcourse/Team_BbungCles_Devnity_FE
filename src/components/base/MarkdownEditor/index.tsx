import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor, Viewer } from "@toast-ui/react-editor";
import { useCallback, Dispatch, SetStateAction } from "react";

interface IProps {
  isViewMode?: boolean;
  setEditorText?: Dispatch<SetStateAction<string>>;
  value: string;
  editorRef: React.MutableRefObject<Editor>;
}

const MarkdownEditor = ({
  isViewMode = false,
  setEditorText,
  value,
  editorRef,
}: IProps) => {
  const handleChange = useCallback(() => {
    if (editorRef.current) {
      const innerText = editorRef.current.getInstance().getMarkdown();
      setEditorText(innerText);
    }
  }, [editorRef, setEditorText]);

  if (isViewMode) {
    return <Viewer initialValue={value} />;
  }

  return (
    <Editor
      ref={editorRef}
      usageStatistics={false}
      initialValue={value}
      previewStyle="tab"
      height="100%"
      initialEditType="markdown"
      onChange={handleChange}
      hideModeSwitch
    />
  );
};

export default MarkdownEditor;
