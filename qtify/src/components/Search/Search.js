import React from "react";
import { TextField, Autocomplete, InputAdornment, IconButton } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material"; // Or your SVG import
import { styled } from "@mui/system";
import { truncate } from "./helpers"; // Make sure this path is correct
import { useNavigate } from "react-router-dom";
import styles from './Search.module.css';
import { useAutocomplete } from "@mui/base/useAutocomplete";

const StyledListbox = styled("ul")({  // Style the Listbox (no need for separate styled component)
    width: "100%",
    margin: 0,
    padding: 0,
    position: "absolute",
    borderRadius: "0px 0px 10px 10px",
    border: "1px solid var(--color-primary)",
    top: 56, // Adjust as needed
    maxHeight: "500px",
    zIndex: 10,
    overflowY: "auto", // Use auto instead of scroll and auto
    left: 0,
    right: 0,
    listStyle: "none",
    backgroundColor: "var(--color-black)",
    color: "var(--color-white)",
    "& li.Mui-focused": {
        backgroundColor: "var(--color-primary)",
        color: "var(--color-white)",
        cursor: "pointer",
    },
    "& li:active": {
        backgroundColor: "#2977f5",
        color: "white",
    },
});

function Search({ searchData, placeholder }) {
    const {
        options: groupedOptions, // Directly use 'options'
        inputValue,
        open,
        getOptionLabel,
        ...params
    } = useAutocomplete({
        id: "use-autocomplete-demo",
        options: searchData || [],
        getOptionLabel: (option) => option.title,
        freeSolo: true, // Allows typing even if not in options
    });

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue) { // Use inputValue for the current input
            const selectedOption = groupedOptions.find(option => option.title === inputValue);
            if (selectedOption && selectedOption.slug) {
                navigate(`/album/${selectedOption.slug}`);
            } else {
                // Handle case where no option is selected or no slug exists
                console.log("No album selected or slug found.");
                // Perhaps show a message to the user
            }
        }
    };


    return (
        <div className={styles.searchContainer}>
            <form className={styles.wrapper} onSubmit={onSubmit}>
                <Autocomplete
                    {...params}
                    open={open}
                    inputValue={inputValue}
                    getOptionLabel={getOptionLabel}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            className={styles.search}
                            placeholder={placeholder || "Search..."}
                            InputProps={{
                                ...params.InputProps,
                                endIcon: (
                                    <IconButton type="submit" className={styles.searchButton}>
                                        <SearchIcon /> {/* Or <YourSvgComponent /> */}
                                    </IconButton>
                                ),
                            }}
                        />
                    )}
                    ListboxComponent={StyledListbox} // Use the styled Listbox
                    renderOption={(props, option) => {
                        const artists = option.songs
                            .flatMap((song) => song.artists)
                            .join(", ");

                        return (
                            <li {...props}>
                                <div className={styles.listElement}>
                                    <p className={styles.albumTitle}>{option.title}</p>
                                    <p className={styles.albumArtists}>
                                        {truncate(artists, 40)}
                                    </p>
                                </div>
                            </li>
                        );
                    }}
                />
            </form>
        </div>
    );
}

export default Search;