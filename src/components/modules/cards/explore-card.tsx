import Avatar from 'boring-avatars';
import { motion } from 'framer-motion';
import { UsersRound } from 'lucide-react';

interface CreatorCardProps {
  id: number;
  name: string;
  username: string;
  description: string;
  supporters: string;
}

const CreatorCard = ({
  id,
  name,
  username,
  description,
  supporters,
}: CreatorCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="w-full md:w-[380px] p-5 flex items-center gap-[13px] hover:bg-gray-50 rounded-2xl transition-colors"
    >
      <div className="relative flex gap-2 items-center">
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-sm text-gray-400 flex items-center"
        >
          #{id}
        </motion.span>
        <Avatar
          name={name}
          className="w-[60px] h-[60px] rounded-[20px] flex items-center"
          square
        />
      </div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex-1 min-w-0"
      >
        <h3 className="font-semibold">{name}</h3>
        <p className="text-[12px] text-gray-400 line-clamp-2">{description}</p>
        <p className="text-sm text-pink-500 mt-1"></p>
        <div className="flex items-center gap-1">
          <UsersRound size={15} className="text-pink-500" />
          <small className="text-gray-400 text-xs">{supporters}</small>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CreatorCard;
