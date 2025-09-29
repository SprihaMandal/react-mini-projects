import './index.css';
import { ThemeProvider } from './contexts/themeContext';
import { CustomScreen } from './projects/customScreen';

export const App = () => {


  return (
    <ThemeProvider>
      <CustomScreen />

    </ThemeProvider>

  )
}

