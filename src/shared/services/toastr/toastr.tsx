import { toast, Toast } from 'react-hot-toast'
import { Stack, Typography } from '@mui/material'

interface ShowNotificationProps {
  message: Toast['message']
  icon?: React.ReactElement
  backgroundColor: string
}

export const showNotification = ({
  message,
  icon,
  backgroundColor,
}: ShowNotificationProps): void => {
  toast(
    () => (
      <Stack
        direction="row"
        sx={{
          justifyContent: 'start',
          alignItems: 'start',
          width: '100%',
        }}
      >
        {icon ? <Stack sx={{ mr: 1.5 }}>{icon}</Stack> : null}

        <Stack
          direction="row"
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Typography variant="subtitle1" color="common.white">
            <>{message}</>
          </Typography>
        </Stack>
      </Stack>
    ),
    {
      style: {
        background: backgroundColor,
        width: '100%',
        maxWidth: '600px',
        borderRadius: '8px',
      },
      position: 'top-center',
      duration: 2000,
    },
  )
}
