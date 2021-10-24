import FormControlLabel from '@mui/material/FormControlLabel'
//import { FormControlLabelProps } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'

const locale = {
    needRemember:"Remember me"
}

interface INeedRemember {
    needRemember:boolean,
    toggleNeedRemember:Function
}

const NeedRemember:React.FC<INeedRemember> = props => {

    const {
        needRemember,
        toggleNeedRemember
    } = props

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        toggleNeedRemember()
    }

    return <FormControlLabel 
        control={<Checkbox 
            checked={needRemember}
            onChange={handleChange}
            color="primary" />}
        label={locale.needRemember}
    />
}
export default NeedRemember