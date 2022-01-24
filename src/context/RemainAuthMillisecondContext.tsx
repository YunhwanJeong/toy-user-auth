import React, { createContext, Dispatch, useContext, useState } from 'react';

type RemainAuthMillisecondState = number;
type RemainAuthMillisecondDisaptch = Dispatch<RemainAuthMillisecondState>;

const RemainAuthMillisecondStateContext =
    createContext<RemainAuthMillisecondState>(0);
const RemainAuthMillisecondDispatchContext =
    createContext<RemainAuthMillisecondDisaptch>(() => null);

function RemainAuthMillisecondContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [remainMillisecond, setRemainMillisecond] = useState(0);

    return (
        <RemainAuthMillisecondStateContext.Provider value={remainMillisecond}>
            <RemainAuthMillisecondDispatchContext.Provider
                value={setRemainMillisecond}
            >
                {children}
            </RemainAuthMillisecondDispatchContext.Provider>
        </RemainAuthMillisecondStateContext.Provider>
    );
}

export function useRemainAuthMillisecondState() {
    return useContext(RemainAuthMillisecondStateContext);
}

export function useRemainAuthMillisecondDispatch() {
    return useContext(RemainAuthMillisecondDispatchContext);
}

export default RemainAuthMillisecondContextProvider;
