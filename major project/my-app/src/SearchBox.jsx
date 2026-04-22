import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function SearchBox(){
    return (
        <div>
            <h3>Search for weather</h3>
            <form>
                <TextField id="city" label="City Name" variant="outlined" required/>
                <Button variant="contained" type="submit">Search</Button>
            </form>
        </div>
    )
}
export default SearchBox;