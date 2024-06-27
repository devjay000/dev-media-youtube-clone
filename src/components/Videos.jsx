import { Stack, Box } from "@mui/material";
import VidCard from "./VidCard";
import ChanCard from "./ChanCard";

const Videos = ({videos, selectedCategory, direction}) => {
    // videos.map((item, idx) => {
    //     console.log(item);
    //     console.log(item.id.kind);
    //     console.log(item.id.videoId)
    //     console.log(item.id.channelId)
    // })
    // console.log(videos);
    return(
        <Stack direction={direction || 'row'} flexWrap="wrap" justifyContent="start" gap={2}>
            {videos.map((item, idx) =>(
                <Box key={idx}> 
                    {item.id.videoId && <VidCard  video = {item} />}
                    {item.id.channelId && <ChanCard channel = {item}/>}
                </Box>
            ))}
        </Stack>
    )
}
export default Videos;
