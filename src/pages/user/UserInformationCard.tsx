import React from 'react';
import {
    Avatar,
    Box,
    Card,
    CardContent,
    Skeleton,
    Typography,
} from '@mui/material';
import { useQuery } from 'react-query';
import { grey } from '@mui/material/colors';
import { useLoginDispatch, useLoginState } from '../../context/LoginContext';
import { User } from '../../apis';
import { GetUserResponse } from '../../apis/User';
import { AxiosError } from 'axios';
import { AxiosErrorResponseData } from '../../utils/CustomAxios';
import { useToastDispatch } from '../../context/ToastContext';

function UserInformationCard() {
    const accessToken = useLoginState();
    const loginDispatch = useLoginDispatch();
    const toastDispatch = useToastDispatch();
    const { isLoading, data } = useQuery<
        GetUserResponse,
        AxiosError,
        GetUserResponse
    >('getUser', () => User.getUser(accessToken), {
        onError: (error: AxiosError<AxiosErrorResponseData>) => {
            if (error.response) {
                toastDispatch({
                    type: 'OPEN',
                    severity: 'error',
                    message: error.response.data.error.message,
                });
                loginDispatch(null);
            }
        },
    });

    return (
        <Card
            raised
            sx={{
                backgroundColor: grey[50],
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
                {isLoading || !data ? (
                    <>
                        <Skeleton
                            variant="circular"
                            sx={{
                                width: 80,
                                height: 80,
                                mr: 4,
                            }}
                        />
                        <CardContent
                            sx={{
                                flexGrow: '1',
                            }}
                        >
                            <Skeleton variant="text" width={'50%'} />
                            <Skeleton variant="text" width={'80%'} />
                        </CardContent>
                    </>
                ) : (
                    <>
                        <Avatar
                            src={data.profileImage}
                            alt="profile avatar image"
                            sx={{
                                width: 80,
                                height: 80,
                                mr: 4,
                            }}
                        />
                        <CardContent>
                            <Typography variant="h6" sx={{ color: grey[800] }}>
                                {data.name}
                            </Typography>
                            <Typography sx={{ color: grey[500] }}>
                                {data.email}
                            </Typography>
                        </CardContent>
                    </>
                )}
            </Box>
        </Card>
    );
}

export default UserInformationCard;
