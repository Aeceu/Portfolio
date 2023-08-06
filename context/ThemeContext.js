
export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
  
  return (
    <ThemeContext.Provider value={{theme,toggle}}>
      {children}
    </ThemeContext.Provider>
  )
}
