import Modal from '../../components/Modal/Modal';
import TextEditor from '../../components/TextEditor/TextEditor';
import { useData } from '../../contexts/DataContext/DataContext';
import NoteCard from '../../components/NoteCard/NoteCard';
import Grid12 from '../../components/Ui/Grid-1-2/Grid12'
import useToast from '../../hooks/useToast';
import { editNote, postArchive, postNote } from '../../apis/api';

const Home = () => {
const {data, setData, getEditNote, handleSubmitNote, filteredData} = useData();
const postToast = useToast();
    return(
        <div>
            <Grid12>
                <NoteCard 
                notes={filteredData} 
                editNote={data.note} 
                setData={setData}
                getEditNote={getEditNote} 
                colors={data.cardColors} 
                colorPallete={data.colorPallete} 
                postToast={postToast}
                edit={editNote}
                postArchive={postArchive}
                filterText={data.search}
                filterLabel={data.filterLabel}
                filterPriority={data.filterPriority}  
                />
            </Grid12>
            <Modal handleClose={() => setData({type:"MODAL", modal:false})} isOpen={data.modal}>
                <TextEditor 
                labels={data.label} 
                notes={data.note} 
                setData={setData} 
                isEdit={data.isEdit} 
                editId={data.editId} 
                handleSubmitNote={handleSubmitNote} 
                priority={data.priority} 
                postNote={postNote} 
                editNote={editNote} 
                postToast={postToast} />
            </Modal>
        </div>
    );
};

export default Home;