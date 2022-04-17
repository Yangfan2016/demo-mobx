import { autorun } from "mobx";
import { inject, observer, MobXProviderContext } from "mobx-react";
import React, { useContext, useEffect } from "react";
import Store from "store/store";

interface Props {

}

function Task(props: Props) {
    const { store } = useContext(MobXProviderContext);

    useEffect(() => {
        // 一个自动观察state的函数
        autorun(() => {
            console.log("Task num: " + store?.num)
        })
    }, [])

    return <div>task: {store?.num}</div>
}

export default observer(Task);
