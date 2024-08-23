import css from './SearchBox.module.css'

const SearchBox = ({filter, onChange}) => {
    return <div className={css.container}>
        <p>Find contacts by name</p>
        <input className={css.input} type="text" value={filter} onChange={onChange}></input>
    </div>
};

export default SearchBox