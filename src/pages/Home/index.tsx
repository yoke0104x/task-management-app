import { events, tasks } from "@/api";
import enums from "@/enums";
import useLocationRewrite from "@/hooks/useLocationRewrite";
import { useUserStore } from "@/store"
import { Button, Card, List } from "antd";
import { useEffect, useState } from "react";



const Home = () => {
    const location = useLocationRewrite();
    const { data } = useUserStore();
    const [dataSource, setDataSource] = useState<any[]>([]);
    const [taskDataSource, setTaskDataSource] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [taskLoading, setTaskLoading] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            setLoading(true)
            const res = await events.getRecentEvent();
            if (res?.code == enums.ResultCodeEnums.SUCCESS) {
                setDataSource(res?.data)
            }
            setLoading(false)
            setTaskLoading(true)
            const taskRes = await tasks.getTaskList();
            if (taskRes?.code == enums.ResultCodeEnums.SUCCESS) {
                setTaskDataSource(taskRes?.data)
            }
            setTaskLoading(false)
        })()
    }, [])

    console.log(data)
    return <div>
        <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold">Welcome， {data?.username}</div>
            <Button type="primary" onClick={() => {
                location.navigate('/events/news')
            }}>Create New Event</Button>
        </div>
        <Card title="Upcoming Events" extra={null} >
            <List
                header={null}
                footer={null}
                bordered
                dataSource={dataSource}
                loading={loading}
                renderItem={(item: any, index: number) => (
                    <List.Item>
                        <span className="">Event {index + 1}：{item?.name} - Date：{item?.date}</span>
                    </List.Item>
                )}
            />
        </Card>

        <Card title="Your Tasks" className="mt-5" extra={null}>
            <List
                header={null}
                footer={null}
                dataSource={taskDataSource}
                loading={taskLoading}
                renderItem={(item: any, index: number) => (
                    <List.Item className="bg-[#E7E7E7] mt-2 indent-4">
                        Task{index + 1}：{item.title}
                    </List.Item>
                )}
            />
        </Card>
    </div>
}
export default Home