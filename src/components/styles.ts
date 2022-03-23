import { createStyles, makeStyles, Theme } from "@material-ui/core";


export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        div__addFilterButtonSection: {
            display: "flex",
            alignItems: "end",

        },
        div__tabsSection: {

        },
        div__tab: {
            marginLeft: 15,
            fontSize: 14,
            color: "#65B366",
            textTransform: "none",
            fontFamily: "Work Sans",
        },
        div__autocomplete: {
            width: 300,
            padding: 0,
            marginBottom: 10,
        },
        div__userOption: {
            display: "flex",
            alignItems: "center",
            height: 35,
            borderRadius: 5,

            "&:hover": {
                backgroundColor: "#99CC98!important",
                cursor: "pointer",
                color: "#fff",
            }
        },
        button__addFilter: {
            width: 118,
            height: 40,
            color: "#339933",
            padding: 0,
            border: "1.2px solid #339933",
            backgroundColor: "#fff",
            fontSize: 14,
            fontWeight: 400,
            textTransform: "none",
            fontFamily: "Work Sans",

            "&:hover": {
                backgroundColor: "#eee"
            }
        }
    })
);