import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

const locale = {
    needRemember:"Remember me"
}

const NeedRemember = props => {

    const {
        needRemember,
        toggleNeedRemember
    } = props

    return <FormControlLabel margin="none"
        control={<Checkbox 
            checked={needRemember}
            onChange={toggleNeedRemember}
            color="primary" />}
        label={locale.needRemember}
    />
}
export default NeedRemember