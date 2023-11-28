import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";

export default function MediaCard({ quest, A, B, id, handleOnChange, value }) {
    return (
        <Card
            className="card border-solid border-1 border-green-200 shadow-md"
            id={`cardContent${id}`}
            sx={{ maxWidth: "1024px", color: "white" }}
            style={{ background: value ? "#33a474" : "#a44cd3" }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {quest}
                </Typography>
            </CardContent>
            <CardActions className="flex flex-col gap-2 ">
                <FormControl className="w-full">
                    <RadioGroup
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="controlled-radio-buttons-group"
                        value={value}>
                        <div className="flex items-center justify-around w-full">
                            <Typography
                                variant="body2"
                                color=""
                                className="lg:w-full w-1/2 text-center">
                                {A}
                            </Typography>
                            <FormControlLabel
                                className="self-center"
                                value="0"
                                control={
                                    <Radio
                                        sx={{
                                            "& .MuiSvgIcon-root": {
                                                fontSize: 28,
                                            },
                                        }}
                                    />
                                }
                                onClick={() => handleOnChange("1", id)}
                            />
                            <FormControlLabel
                                value="1"
                                control={<Radio />}
                                onClick={() => handleOnChange("2", id)}
                            />
                            <FormControlLabel
                                value="2"
                                control={<Radio size="small" />}
                                onClick={() => handleOnChange("3", id)}
                            />
                            <FormControlLabel
                                value="3"
                                control={<Radio />}
                                onClick={() => handleOnChange("4", id)}
                            />
                            <FormControlLabel
                                value="4"
                                control={
                                    <Radio
                                        sx={{
                                            "& .MuiSvgIcon-root": {
                                                fontSize: 28,
                                            },
                                        }}
                                    />
                                }
                                onClick={() => handleOnChange("5", id)}
                            />
                            <Typography
                                variant="body2"
                                color=""
                                className="lg:w-full w-1/2 text-center">
                                {B}
                            </Typography>
                        </div>
                    </RadioGroup>
                </FormControl>
            </CardActions>
        </Card>
    );
}
