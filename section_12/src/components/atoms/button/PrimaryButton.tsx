import React, { VFC, memo, ReactNode } from "react";
import { Button } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
}

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, disabled = false, loading = false, onClick } = props;
  return (
    <Button
      onClick={onClick}
      bg="teal.400"
      color="white"
      isLoading={loading}
      disabled={disabled || loading}
      _hover={{ opacity: 0.8 }}
    >
      { children }
    </Button>
  )
});
