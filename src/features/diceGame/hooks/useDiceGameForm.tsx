'use client'

import { useForm } from 'react-hook-form'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined'

import { useGameStore } from '~/app/providers/GameStoreProvider'
import {
  DiceGameFormValue,
  POSITION_VARIANTS,
  STATUS_TYPE,
} from '~/entities/diceGame'
import { showNotification } from '~/shared/services/toastr'

const getToastByStatus = {
  [STATUS_TYPE.won]: () =>
    showNotification({
      backgroundColor: 'green',
      icon: <CheckCircleOutlinedIcon sx={{ color: 'white' }} />,
      message: 'You won',
    }),
  [STATUS_TYPE.lost]: () =>
    showNotification({
      backgroundColor: 'red',
      icon: <ErrorOutlineOutlinedIcon sx={{ color: 'white' }} />,
      message: (
        <>
          You lost <br />
          Number was higher
        </>
      ),
    }),
}

export const useDiceGameForm = () => {
  const addResultGame = useGameStore((store) => store.addResultGame)
  const generateCount = useGameStore((store) => store.generateCount)

  const methods = useForm<DiceGameFormValue>({
    defaultValues: {
      placement: POSITION_VARIANTS.under,
      range: 20,
    },
  })

  const { isSubmitting } = methods.formState

  const handleSubmit = async (values: DiceGameFormValue) => {
    await generateCount()

    const status = addResultGame(values)

    const showStatusToast = getToastByStatus[status]
    showStatusToast()
  }

  return { methods, handleSubmit, isSubmitting }
}
