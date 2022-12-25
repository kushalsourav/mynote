import { useData } from '../../contexts/DataContext/DataContext';
import NoteCard from '../../components/NoteCard/NoteCard';
import Grid12 from '../../components/Ui/Grid-1-2/Grid12'
import { postArchive } from '../../apis/api';
import useToast from '../../hooks/useToast';
const Label  = () => {
    const {data, setData, getEditNote, filteredData} = useData();
    const postToast = useToast();
    const label = true;
    return(
        <>
        <div>
        <Grid12>
            <NoteCard 
            notes={filteredData} 
            label={label} 
            filterLabel={data.filterLabel} 
            setData={setData}  
            getEditNote={getEditNote} 
            postArchive={postArchive} 
            colors={data.cardColors} 
            colorPallete={data.colorPallete} 
            postToast={postToast}
            filterText={data.search}
            filterPriority={data.filterPriority}
            /> 
            </Grid12>
        </div>
        </>
    );
};
export default Label;