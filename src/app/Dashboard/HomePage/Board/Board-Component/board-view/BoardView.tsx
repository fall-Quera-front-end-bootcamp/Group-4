import React, { useState , useEffect } from 'react';
import ColumnOpen from '../Board-Column/Column-Open/Board-Column';
import ColumnCardImage from '../Board-Column/Column-Card-Image/ColumnCardImage';
import BoardCol from '../Board-Column/BoardCol';
import pict from '../../../../../Components/assets/icons/pic-t.webp';
import test2 from '../../../../../Components/assets/icons/test2.jpeg';
import DynamicButton from '../../../../../Components/common/button';
import NewTaksButton from '../../../../../Components/assets/icons/newTask.png';
import NewTask from '../../../../../Task/NewTask/NewTask';
import { getBoards } from '../../../../../../services/board';
import { selectWorkspaceId } from '../../../../../../Features/workspaceSlice';
import { selectProjectId } from '../../../../../../Features/projectSlice';
import { RootState } from "../../../../../../utils/store";
import { useSelector } from "react-redux";



interface Board {
    id: number;
    name: string;
    order: number;
    tasks: string;
    tasks_count: string;
    is_archive: boolean;
    color: string;
}

const BoardView: React.FC = () => {

    const workspaceId = useSelector((state: RootState) => selectWorkspaceId(state));
    const projectId = useSelector((state: RootState) => selectProjectId(state));
    // console.log(workspaceId,projectId);
    const [boards, setBoards] = useState<any[]>([]); 
    // console.log(workspaceId,projectId);

    useEffect(() => {
        if (workspaceId && projectId) { 
            getBoards(workspaceId, projectId)
                .then((data) => {
                    setBoards(data); 
                })
                .catch((error) => {
                    console.error('Error fetching boards:', error);
                    console.log('errrrr',workspaceId,projectId);
                });
        }
    }, [workspaceId,projectId]);


    interface Task {
        id: number;
        imgSrc?: string;
        projectName: string;
        title: string;
        deadline: string;
        state: string;
        tags: string[];
    }

    const [showModal, setShowModal] = useState(false);
    
    const toggleModal = () => {
        setShowModal(!showModal);
    };
    console.log(workspaceId,projectId);
    
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: 'flex-start', marginRight: '290px', position: 'absolute', right: '65px', top: '150px' }}>
                {boards.map((board) => (
                    <BoardCol key={board.id} board={board} />
                ))}
                <DynamicButton
                    text="تسک جدید"
                    width={118}
                    height={40}
                    onClick={toggleModal}
                    bgColor="#007bff"
                    textColor="#ffffff"
                    fontSize="14px"
                    fontWeight={800}
                    borderRadius={6}
                    icon={NewTaksButton}
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '1302px',
                        padding: '0px',
                    }}
                />
                {showModal && <NewTask onClose={toggleModal} />}
            </div>
        </div>
    );
}

export default BoardView;


// const tasks: Task[] = [
    //         {
    //             id: 5,
    //             imgSrc: `${"https://media.istockphoto.com/id/1274989544/nl/foto/map-met-beschermde-gezondheidsinformatie-phi-als-onderdeel-van-hipaa-regels.jpg?s=1024x1024&w=is&k=20&c=6tJFliykfyoZPWR5COJ_fYMGh2I-K796aSP_y4V0l60="}`,
    //             projectName: 'Project E',
    //             title: 'Task 5',
    //             deadline: '2024-03-05',
    //             state: 'done',
    //             tags: ['tag9', 'tag10']
    //         },    {
    //             id: 5,
    //             imgSrc: `${"https://media.istockphoto.com/id/1345560645/nl/foto/wooden-figures-on-a-table.jpg?s=1024x1024&w=is&k=20&c=DIPSqzhVdEiB16G_AbiGJnKv8EfBjEzbBsg3HR-Qra8="}`,
    //             projectName: 'Project E',
    //             title: 'Task 5',
    //             deadline: '2024-03-05',
    //             state: 'done',
    //             tags: ['tag9', 'tag10']
    //         },
    //     {
    //         id: 1,
    //         imgSrc: `${pict}`,
    //         projectName: 'Project A',
    //         title: 'Task 1',
    //         deadline: '2024-03-01',
    //         state: 'pending',
    //         tags: ['tag1', 'tag2']
    //     },
    //     {
    //         id: 2,
    //         imgSrc: `${"https://media.istockphoto.com/id/1127546741/nl/foto/bescherming-netwerk-beveiliging-computer-en-veilig-uw-gegevens-concept-laptop-werken.jpg?s=1024x1024&w=is&k=20&c=dv8AT72qaEY_ssrmT-GwYjPFyvRVFZiWxDRLNFbhE7M="}`,
    //         projectName: 'Project B',
    //         title: 'Task 2',
    //         deadline: '2024-03-02',
    //         state: 'in progress',
    //         tags: ['tag3', 'tag4']
    //     },
    //     {
    //         id: 3,
    //         imgSrc: `${"https://media.istockphoto.com/id/1346853640/nl/foto/saving-money-concept-man-hand-putting-row-and-coin-write-finance-saving-money-concept-man-hand.jpg?s=1024x1024&w=is&k=20&c=Qm0QiAjttptttWKD4H06gHRHbs_cj85BuOD-tdrAxvI="}`,
    //         projectName: 'Project C',
    //         title: 'Task 3',
    //         deadline: '2024-03-03',
    //         state: 'open',
    //         tags: ['tag5', 'tag6']
    //     },
    //     {
    //         id: 2,
    //         imgSrc: `${"https://media.istockphoto.com/id/1145371340/nl/foto/partner-heeft-een-fraude-in-het-contract-van-de-verkoop-en-wordt-overhandigd-een-contant-geld.jpg?s=1024x1024&w=is&k=20&c=f6H1FNKHY9X5dBPbHEiIPVlq6fF0QNJd-aogBmpI7co="}`,
    //         projectName: 'Project B',
    //         title: 'Task 2',
    //         deadline: '2024-03-02',
    //         state: 'in progress',
    //         tags: ['tag3', 'tag4']
    //     },
    //     {
    //         id: 3,
    //         imgSrc: `${"https://media.istockphoto.com/id/521007200/nl/foto/private-and-confidential.jpg?s=1024x1024&w=is&k=20&c=8ERuCbCCYYFTzpohX3gCDlMbFgr2abovWgq9qCHPljA="}`,
    //         projectName: 'Project C',
    //         title: 'Task 3',
    //         deadline: '2024-03-03',
    //         state: 'open',
    //         tags: ['tag5', 'tag6']
    //     },    {
    //         id: 2,
    //         imgSrc: `${"https://media.istockphoto.com/id/491838182/nl/foto/privacy-settings-on-laptop-screen.jpg?s=1024x1024&w=is&k=20&c=qMbgPEirnwAI78RVrZedU620SBlIxj3bkwEb7aQoAcw="}`,
    //         projectName: 'Project B',
    //         title: 'Task 2',
    //         deadline: '2024-03-02',
    //         state: 'in progress',
    //         tags: ['tag3', 'tag4']
    //     },
    //     {
    //         id: 3,
    //         imgSrc: `${"https://media.istockphoto.com/id/1319015163/nl/foto/ernstige-zakenman-in-kostuum-dat-stilteteken-toont.jpg?s=1024x1024&w=is&k=20&c=rGJlmAS6pl3LTQ1-a-_oEIvirDGX7LRmjbUprltkPBc="}`,
    //         projectName: 'Project C',
    //         title: 'Task 3',
    //         deadline: '2024-03-03',
    //         state: 'open',
    //         tags: ['tag5', 'tag6']
    //     },    {
    //         id: 2,
    //         imgSrc: `${"https://media.istockphoto.com/id/1201896353/nl/foto/cookie-op-het-toetsenbord.jpg?s=1024x1024&w=is&k=20&c=OG9ZMifcfu-REz-sE8QtqheB3hm9GTbo53lLjf0F9Ys="}`,
    //         projectName: 'Project B',
    //         title: 'Task 2',
    //         deadline: '2024-03-02',
    //         state: 'in progress',
    //         tags: ['tag3', 'tag4']
    //     },
    //     {
    //         id: 3,
    //         imgSrc: `${test2}`,
    //         projectName: 'Project C',
    //         title: 'Task 3',
    //         deadline: '2024-03-03',
    //         state: 'open',
    //         tags: ['tag5', 'tag6']
    //     },
    //     {
    //         id: 4,
            
    //         projectName: 'ProjectD',
    //         title: 'Task 4',
    //         deadline: '2024-03-04',
    //         state: 'pending',
    //         tags: ['tag7', 'tag8']
    //     },
    //     {
    //         id: 5,
    //         imgSrc: `${"https://media.istockphoto.com/id/1136060778/nl/foto/zakenman-geld-te-geven-in-de-envelop-aan-zijn-partner-in-het-donker.jpg?s=1024x1024&w=is&k=20&c=dUqPJh2Xh_XeAWOcHaJLnFlvbyRYXFXARbOXs0jI1sk="}`,
    //         projectName: 'Project E',
    //         title: 'Task 5',
    //         deadline: '2024-03-05',
    //         state: 'open',
    //         tags: ['tag9', 'tag10']
    //     },    
    //     {
    //         id: 5,
    //         imgSrc: 'task5.jpg',
    //         projectName: 'Project E',
    //         title: 'Task 5',
    //         deadline: '2024-03-05',
    //         state: 'open',
    //         tags: ['tag9', 'tag10']
    //     },
    // ];




    // 
    // Group tasks by state
    // const tasksByState: { [key: string]: Task[] } = {};
    // tasks.forEach(task => {
    //     if (!tasksByState[task.state]) {
    //         tasksByState[task.state] = [];
    //     }
    //     tasksByState[task.state].push(task);
    // });



    // {Object.entries(tasksByState).map(([state, tasks]) => (
    //     <div key={state} style={{ flex: 1 ,
    //                                 display:'flex',
    //                                 flexDirection:'column',
    //                                 gap:'10px'}}>
    //         <ColumnOpen state={state} number={tasks.length} borderColor="#FD7E14" />
    //         {tasks.map(task => (
    //             <ColumnCardImage
    //                 key={task.id}
    //                 imgSrc={task.imgSrc||''}
    //                 projectName={task.projectName}
    //                 title={task.title}
    //                 deadline={task.deadline}
    //                 state={task.state}
    //                 tags={task.tags}
    //             />
    //         ))}
    //     </div>