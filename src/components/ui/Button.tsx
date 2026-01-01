import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonLayout = 'full' | 'fit';

type ButtonProps = {
  label: string;
  onPress: () => void;

  backgroundColor?: string;
  textColor?: string;

  size?: ButtonSize;
  layout?: ButtonLayout;

  icon?: {
    position: 'left' | 'right';
    element: ReactNode;
  };

  disabled?: boolean;
};

export default function Button({
  label,
  onPress,
  backgroundColor = '#F5C542',
  textColor = '#1E4D3A',
  size = 'md',
  layout = 'fit',
  icon,
  disabled = false,
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.base,
        styles[size],
        layout === 'full' && styles.full,
        { backgroundColor },
        disabled && styles.disabled,
      ]}
    >
      <View style={styles.content}>
        {icon?.position === 'left' && icon.element}

        <Text style={[styles.label, { color: textColor }]}>
          {label}
        </Text>

        {icon?.position === 'right' && icon.element}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  label: {
    fontWeight: '600',
    fontSize: 14,
  },
    sm: {
    height: 36,
    paddingHorizontal: 12,
    },
    md: {
    height: 44,
    paddingHorizontal: 16,
    },
    lg: {
    height: 52,
    paddingHorizontal: 20,
    },

  full: {
    width: '100%',
  },

  disabled: {
    opacity: 0.5,
  },
});