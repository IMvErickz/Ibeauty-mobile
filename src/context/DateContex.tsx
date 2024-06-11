import { ReactNode, createContext, useState } from "react";

interface DateContextProviderProps {
    children: ReactNode
}

interface DateContextProps {
    date: string
    handleSetDate: (date: string) => void
}

export const DateContext = createContext({} as DateContextProps)

export function DateContextProvider({ children }: DateContextProviderProps) {
    const [date, setDate] = useState('')

    function handleSetDate(date: string) {
        setDate(date)
    }

    return (
        <DateContext.Provider value={{ date, handleSetDate }}>
            {children}
        </DateContext.Provider>
    )
}