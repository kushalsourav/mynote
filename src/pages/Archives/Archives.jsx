import Grid12 from "../../components/Ui/Grid-1-2/Grid12";
import NoteCard from "../../components/NoteCard/NoteCard";
import { useData } from "../../contexts/DataContext/DataContext";
import { deleteArchive, restoreArchive } from "../../apis/api";
import useToast from "../../hooks/useToast";

const Archive = () => {
    const {data, setData} = useData();
    const postToast = useToast();
  return (
            <Grid12>
              <NoteCard 
                notes={data.archives}   
                setData={setData}  
                deleteNote={deleteArchive}  
                restoreNote={restoreArchive}
                colorPallete={data.colorPallete}  
                colors={data.cardColors}  
                postToast={postToast}
                filterText={data.search}
                filterPriority={data.filterPriority}
                filterLabel={data.filterLabel}
              /> 
            </Grid12>
  );
};

export default Archive;