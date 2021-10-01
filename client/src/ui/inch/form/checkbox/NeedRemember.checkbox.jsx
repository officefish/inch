import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const locale = {
    needRemember:"Remember me"
}

const NeedRemember = props => {

    const {
        needRemember,
        toggleNeedRemember
    } = props

    return <FormControlLabel
        control={<Checkbox 
            checked={needRemember}
            onChange={toggleNeedRemember}
            color="primary" />}
        label={locale.needRemember}
    />
}
export default NeedRemember