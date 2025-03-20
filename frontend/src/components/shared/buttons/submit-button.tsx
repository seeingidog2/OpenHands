import { useTranslation } from "react-i18next";
import ArrowSendIcon from "#/icons/arrow-send.svg?react";
import { I18nKey } from "#/i18n/declaration";

interface SubmitButtonProps {
  isDisabled?: boolean;
  onClick: () => void;
}

export function SubmitButton({ isDisabled, onClick }: SubmitButtonProps) {
  const { t } = useTranslation();
  return (
    <button
      aria-label={t(I18nKey.BUTTON$SEND)}
      disabled={isDisabled}
      onClick={onClick}
      type="submit"
      className={`border border-white rounded-lg w-6 h-6 flex items-center justify-center ${
        isDisabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-neutral-500 focus:bg-neutral-500"
      }`}
    >
      <ArrowSendIcon />
    </button>
  );
}
