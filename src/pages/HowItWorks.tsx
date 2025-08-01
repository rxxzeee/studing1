import React from "react";
import { Box, Typography } from "@mui/material";

export const HowItWorks: React.FC = () => {
    return(
        <Box sx={{ width: '100%', marginTop: "150px", justifyContent:' center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h3" gutterBottom color={"black"} textAlign={"center"}>
                Як це працює?
            </Typography>
            <Typography variant="h4" color="text.secondary" mt={2} textAlign={"center"}>
                1. Виберіть аркану, яка вас цікавить.<br />
                2. Натисніть кнопку "Детальніше", щоб переглянути інформацію про аркану.<br />
                3. Заповніть форму замовлення у модальному вікні.<br />
                4. Після підтвердження, аркан буде додано до вашого кошика.
            </Typography>
        </Box>
    )
}