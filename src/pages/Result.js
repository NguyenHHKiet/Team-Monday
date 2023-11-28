import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
    Box,
    Breadcrumbs,
    CircularProgress,
    Stack,
    Tab,
    Tabs,
    Typography,
} from "@mui/material";
import portraits from "./../assets/portraits";
import performers from "./../assets/performers";

function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: "relative", display: "inline-flex" }}>
            <CircularProgress variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <Typography
                    variant="caption"
                    component="div"
                    color="text.secondary">{`${Math.round(
                    props.value
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && (
                <Box sx={{ p: 2 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

function Result({}) {
    const location = useLocation();
    const [detail, setDetail] = useState({});
    const [value, setValue] = React.useState(0);

    const data = location.state;
    const resultTable = [
        {
            type: "E",
            A: [1, 2, 8, 11, 21, 29, 33, 36, 43, 46, 50, 57, 61, 64],
            B: [],
            point: 0,
        },
        {
            type: "I",
            A: [],
            B: [1, 2, 8, 11, 21, 29, 33, 36, 43, 46, 50, 57, 61, 64],
            point: 0,
        },
        {
            type: "S",
            A: [
                3, 10, 23, 27, 34, 42, 44, 52, 53, 54, 55, 56, 58, 59, 62, 63,
                65,
            ],
            B: [],
            point: 0,
        },
        {
            type: "N",
            A: [],
            B: [
                3, 10, 23, 27, 34, 42, 44, 52, 53, 54, 55, 56, 58, 59, 62, 63,
                65,
            ],
            point: 0,
        },
        {
            type: "T",
            A: [
                3, 4, 5, 6, 9, 12, 17, 18, 19, 25, 26, 30, 31, 32, 33, 35, 36,
                37, 38, 39, 40, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 56, 58,
                59, 60, 61, 63, 64, 65, 66, 67, 68, 69, 70,
            ],
            B: [52],
            point: 0,
        },
        {
            type: "F",
            A: [52],
            B: [
                3, 4, 5, 6, 9, 12, 17, 18, 19, 25, 26, 30, 31, 32, 33, 35, 36,
                37, 38, 39, 40, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 56, 58,
                59, 60, 61, 63, 64, 65, 66, 67, 68, 69, 70,
            ],
            point: 0,
        },
        {
            type: "J",
            A: [
                3, 4, 6, 7, 8, 11, 13, 14, 20, 21, 22, 28, 33, 34, 39, 42, 47,
                48, 49, 55, 56, 60, 62, 68, 69, 70,
            ],
            B: [31, 32, 35, 36, 51, 53, 61, 64],
            point: 0,
        },
        {
            type: "P",
            A: [31, 32, 35, 36, 51, 53, 61, 64],
            B: [
                3, 4, 6, 7, 8, 11, 13, 14, 20, 21, 22, 28, 33, 34, 39, 42, 47,
                48, 49, 55, 56, 60, 62, 68, 69, 70,
            ],
            point: 0,
        },
    ];
    const typeTypography = {
        E: "Extraversion (E)",
        I: "Introversion (I)",
        S: "Sensing (S)",
        N: "Intuition (N)",
        T: "Thinking (T)",
        F: "Feeling (F)",
        J: "Judging (J)",
        P: "Perceiving (P)",
    };
    let portrait = "";

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useMemo(() => {
        for (const type of resultTable) {
            for (const quest of data) {
                if (type.B.indexOf(quest.id) >= 0) {
                    type.point += Number(quest.value);
                }
                if (type.A.indexOf(quest.id) >= 0) {
                    type.point += Number(4 - quest.value);
                }
            }
            type.percent = (
                (type.point / ((type.A.length + type.B.length) * 4)) *
                100
            ).toFixed(2);
        }
    }, [data, resultTable]);

    useMemo(() => {
        if (data[0].percent >= data[1].percent) {
            portrait += "E";
        } else {
            portrait += "I";
        }

        if (data[2].percent >= data[3].percent) {
            portrait += "S";
        } else {
            portrait += "N";
        }

        if (data[4].percent >= data[5].percent) {
            portrait += "T";
        } else {
            portrait += "F";
        }

        if (data[6].percent >= data[7].percent) {
            portrait += "J";
        } else {
            portrait += "P";
        }

        const temp = portraits.filter((element) => element.type === portrait);
        setDetail(temp[0]);
    }, []);
    console.log(detail);

    // Function to find a string in image names
    function findImageWithString(searchString = "unknown") {
        for (const key in performers) {
            if (Object.hasOwnProperty.call(performers, key)) {
                if (key.includes(searchString)) return key;
            }
        }
    }

    const imageKey = findImageWithString(detail.type);

    console.log(findImageWithString(detail.type));

    return (
        <div style={{ background: "#33a474", height: "100vh" }}>
            <div
                style={{ maxWidth: "80rem" }}
                className="grid grid-cols-1 md:grid-cols-4 gap-2 place-items-center w-full px-20 pt-10">
                <TableContainer
                    component={Paper}
                    sx={{ width: "100%" }}
                    className="shadow">
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Type Name&nbsp;(key)</TableCell>
                                <TableCell align="right">
                                    Percent&nbsp;(%)
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {resultTable.map((item) => (
                                <>
                                    <TableRow key={item.type}>
                                        <TableCell component="th" scope="row">
                                            {typeTypography[item.type]}
                                        </TableCell>
                                        <TableCell align="right">
                                            <CircularProgressWithLabel
                                                value={item.percent}
                                            />
                                        </TableCell>
                                    </TableRow>
                                </>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div
                    className="md:col-span-3 bg-white w-full place-self-stretch rounded shadow relative"
                    style={{ height: "502.27px" }}>
                    <div className="p-3 h-1/2 ">
                        <Breadcrumbs aria-label="breadcrumb">
                            <Typography underline="hover" color="inherit">
                                {detail.type}
                            </Typography>
                            <Typography underline="hover" color="inherit">
                                {detail.nickname}
                            </Typography>
                            <Typography color="text.primary">
                                <mark>{findImageWithString(detail.type)}</mark>
                            </Typography>
                        </Breadcrumbs>
                        <div className="grid grid-cols-2">
                            <h5>{detail.title}</h5>
                            <div className="h-1/2 mx-auto">
                                <img
                                    src={`https://res.cloudinary.com/dhyyyqwaf/image/upload/v1701132837/RESULT-KOREAN%20CELEBRITIES/${performers[imageKey]}.png`}
                                    alt={"..."}
                                    loading="lazy"
                                    className="h-full rounded shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                    <Box
                        sx={{ width: "100%" }}
                        className="overflow-x-auto h-1/2 absolute bottom-0">
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                aria-label="basic tabs example">
                                <Tab label="strength" {...a11yProps(0)} />
                                <Tab label="weakness" {...a11yProps(1)} />
                                <Tab label="solution" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            {detail.strength}
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            {detail.weakness}
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            {detail.solution}
                        </CustomTabPanel>
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default Result;
