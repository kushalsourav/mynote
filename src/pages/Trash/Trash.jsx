import Grid12 from "../../components/Ui/Grid-1-2/Grid12";
import NoteCard from "../../components/NoteCard/NoteCard";
import { useData } from "../../contexts/DataContext/DataContext";
import { deleteTrash, postArchive,restoreTrash } from "../../apis/api";
import NoData from "../../components/NoData/NoData";
import useToast from "../../hooks/useToast";
const Trash = () => {
    const {data, setData} = useData();
    const postToast = useToast();
  return (
    <div className="container">
      <Grid12>
           {data.trash.length === 0 && <NoData />}
           <NoteCard notes={data.trash} filterText={data.search} setData={setData}  deleteNote={deleteTrash} postArchive={postArchive} restoreNote={restoreTrash} colors={data.cardColors}colorPallete={data.colorPallete} postToast={postToast} /> 
      </Grid12>
    </div>
  );
};

export default Trash;